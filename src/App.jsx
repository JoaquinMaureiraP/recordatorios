import './App.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Card,Row,Col, Container, FormLabel} from 'react-bootstrap'
import { useState } from 'react';
function App() {
 const [Reminders,setReminders]=useState([]);
 const [Desc,setDesc]=useState('');
 const [Date,setDate]=useState('');
 const [editIndex,setEditIndex]=useState(null);
 
 const handleSubmit=(event)=>{
   event.preventDefault();
   if(editIndex !== null){
    const newReminders=[...Reminders];
    newReminders[editIndex]={Desc,Date}
    setReminders(newReminders)
    setEditIndex(null)
    // console.log(Reminders)
   }else{
   setReminders([...Reminders,{Desc,Date}])
  
   setDesc('')
   setDate('')
   }}

const handleDelete=(index)=>{
  const newReminders=[...Reminders];
  newReminders.splice(index,1);
  setReminders(newReminders)
}

const handleEdit=(index)=>{
  setDesc(Reminders[index].Desc);
  setDate(Reminders[index].Date);
  setEditIndex(index);
}

  return (
    <>
  <Container>

  <Row>
    <Col>
     <Form onSubmit={handleSubmit}>
      <Form.Label><u>Recordatorios</u></Form.Label> 
      <Form.Group className="mb-3">
          <Form.Label>Descripcion</Form.Label>
          <Form.Control type="text" placeholder=" " value={Desc} onChange={(e)=>setDesc(e.target.value)}  />
      </Form.Group>
      <Form.Group className="mb-3">
          <Form.Label>Fecha</Form.Label>
          <Form.Control type="date" placeholder=" " value={Date} onChange={(e)=>setDate(e.target.value)}/>
          <Form.Check type="switch"id="custom-switch"label=" Importante"/>
      </Form.Group>
        <Button type="submit">{
          editIndex!==null?'Actualizar Recordatorio':'Agregar Recordatorio'}
          </Button>
      </Form>
    </Col>
  </Row>
   <Row>{
      Reminders.map((Reminders,index)=>(
      <Col sm={6} key={index}>
            <Card style={{ width:'18rem',marginTop:'20px'}}>
                <Card.Body>
                  <Card.Text style={{textAlign: 'Left'}}>Descripcion: {Reminders.Desc}</Card.Text>
                  <Card.Text style={{textAlign: 'Left'}}>Fecha de recordatorio: {Reminders.Date}</Card.Text>
                  <Button variant="danger" onClick={() => handleDelete(index)}>
                    Eliminar
                  </Button>
                <Button variant="warning" onClick={() => handleEdit(index)} style={{ marginLeft: '10px' }}>
                    Editar
                </Button>
                </Card.Body>
            </Card>
      </Col>
      ))
    }
   </Row>
       
  </Container>
    </>
  )
}


export default App