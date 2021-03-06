import React, {useState, useMemo, useEffect} from 'react';
import {convertToRaw, EditorState} from 'draft-js';
import {Editor} from 'react-draft-wysiwyg';
import {Button, Card, CardBody, CardHeader, Col, FormGroup, Input, Label, Row} from "reactstrap";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import ReactTags from 'react-tag-autocomplete'
import db from '../../models/db.js'
import {database} from "../../models/db";
import embed from "embed-video";

const ArticleEditor = (props) => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const [title, setTitle] = useState('');
  const [categoriesList, setCategories] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const htmlContent = useMemo(() => draftToHtml(convertToRaw(editorState.getCurrentContent())), [editorState]);

  const onSaveButtonClick = () => {
    const categories = categoriesList.map(({id}) => id);

    // TODO: IMPLEMENT func to fetch to db OR create another container for editor (mb second is best)
    const data = {text: htmlContent};
    if (categoriesList.length)
      data.categories = categories;
    db.collection("articles").doc(title).set(data)
      .then(function () {
        console.log("Document successfully written!");
        database.ref(`/articles/titles/${title}`).set(true);
        categories.forEach(category => {
          const ref = database.ref(`/categories/${category}/count`);
          ref.transaction(function (current) {
            return current + 1;
          });
        });
        const ref = database.ref(`/articles/count`);
        ref.transaction(function (current) {
          return current + 1;
        });
        props.history.push('/home')
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  };

  const onTitleChange = ({target}) => {
    setTitle(target.value);
  };

  useEffect(() => {
    db.collection("categories")
      .get()
      .then(function (querySnapshot) {
        const allCategories = [];
        querySnapshot.forEach(function (doc) {
          allCategories.push({id: doc.id, name: doc.id})
        });
        setAllCategories(allCategories)
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }, []);

  const handleAddition = (tag) => {
    setCategories([...categoriesList, tag]);
  };

  const handleDelete = (i) => {
    setCategories(categoriesList.filter((tag, index) => index !== i))
  };

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12" sm="6">
          <Card>
            <CardHeader>
              Редактор
            </CardHeader>
            <CardBody>
              <Row>
                <Col xs="12">
                  <FormGroup>
                    <Label htmlFor="name">Заголовок</Label>
                    <Input type="text" required value={title}
                           onChange={onTitleChange}/>
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label htmlFor="name">Текст</Label>
                <Editor
                  wrapperClassName="demo-wrapper"
                  editorClassName="article-editor"
                  onEditorStateChange={setEditorState}
                  toolbar={{
                    link: {
                      linkCallback: params => ({...params})
                    },
                    embedded: {
                      embedCallback: link => {
                        const detectedSrc = /<iframe.*? src="(.*?)"/.exec(embed(link));
                        return (detectedSrc && detectedSrc[1]) || link;
                      }
                    }
                  }}
                />
              </FormGroup>
              <div>
                <ReactTags
                  tags={categoriesList}
                  suggestions={allCategories}
                  handleDelete={handleDelete}
                  handleAddition={handleAddition}
                  autofocus={false}
                  placeholder={'Додати категорію'}
                />
              </div>
              <Row>
                <Button block color="primary" disabled={!title || !editorState} onClick={onSaveButtonClick}>
                  Зберегти
                </Button>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" sm="6">
          <Card className={"result-card"}>
            <CardHeader>
              Результат
            </CardHeader>
            <CardBody>
              <h1>{title}</h1>
              <div dangerouslySetInnerHTML={{__html: htmlContent}}/>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ArticleEditor
