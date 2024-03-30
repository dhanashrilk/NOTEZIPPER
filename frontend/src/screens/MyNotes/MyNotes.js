import React, { useEffect } from "react";
import MainScreen from "../../components/MainScreen/MainScreen";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
// import Accordion from "react-bootstrap/Accordion";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteNoteAction, listNotes } from "../../actions/notesActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

const MyNotes = ({ search }) => {
  const dispatch = useDispatch();

  const noteList = useSelector((state) => state.noteList);

  const { loading, notes, error } = noteList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const noteCreate = useSelector((state) => state.noteCreate);
  const { success: successCreate } = noteCreate;

  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { succes: successUpdate } = noteUpdate;

  const noteDelete = useSelector((state) => state.noteDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = noteDelete;

  const deleteHandler = (id) => {
    if (window.confirm("are you sure?")) {
      dispatch(deleteNoteAction(id));
    }
  };

  console.log(notes);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(listNotes());
    if (!userInfo) {
      navigate("/");
    }
  }, [
    dispatch,
    navigate,
    userInfo,
    successCreate,
    successUpdate,
    successDelete,
  ]);

  return (
    <MainScreen title={`Welcome Back ${userInfo.name}.....`}>
      <style>{`
      .cardWidth{
        width: 100% !important;
      }
      .accordion-button{
        border: none;
        background-color: transparent;
        outline: none;
      }
       .accordion-button:focus{
          outline: none !important;
        }
      .
      `}</style>
      <div className="cardWidth">
        <Link to="/createnote">
          <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
            Create New Note
          </Button>
        </Link>
        {errorDelete && (
          <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
        )}
        {loadingDelete && <Loading />}
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />}
        {notes &&
          notes
            .filter((filteredNote) =>
              filteredNote.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((note) => (
              <Accordion key={note._id}>
                <Card style={{ margin: 10 }}>
                  <Card.Header style={{ display: "flex" }}>
                    <span
                      style={{
                        color: "black",
                        textDecoration: "none",
                        flex: 1,
                        cursor: "poiner",
                        alignSelf: "center",
                        fontSize: 18,
                      }}
                    >
                      <Accordion.Toggle
                        as={Card.Text}
                        variant="link"
                        eventKey="0"
                        className=""
                      >
                        {note.title}
                      </Accordion.Toggle>
                    </span>

                    <div>
                      <Button href={`/note/${note._id}`}>Edit</Button>
                      <Button
                        variant="danger"
                        className="mx-2"
                        onClick={() => deleteHandler(note._id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </Card.Header>

                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <h4>
                        <Badge variant="success">
                          Category - {note.category}
                        </Badge>
                      </h4>
                      <blockquote className="blockquote mb-0">
                        <p>{note.content}</p>
                        <footer className="blockquote-footer">
                          Created On {""}
                          <cite title="Source Title">
                            {note.createdAt.substring(0, 10)}
                          </cite>
                        </footer>
                      </blockquote>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            ))}
      </div>
    </MainScreen>
  );
};

export default MyNotes;
