import React, { useState } from 'react';
import { Container, Navbar, Offcanvas, Nav, NavDropdown, Col, Row ,Grid,Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,LineChart,Line } from 'recharts';
import './user.css';

const data = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
];

const AdminPage = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Navbar bg="light" expand={false} fixed="top">
        <Container fluid>
          <Navbar.Brand href="#"></Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
            show={show}
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Admin Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/admin">Overview</Nav.Link>
                <Nav.Link as={Link} to="/ticket">Tickets</Nav.Link>
                <Nav.Link as={Link} to="/ideas">Ideas</Nav.Link>
                <Nav.Link as={Link} to="/Contact">Contacts</Nav.Link>
                <Nav.Link as={Link} to="/agent">Agents</Nav.Link>
                <Nav.Link as={Link} to="/">Articles</Nav.Link>
                <Nav.Link as={Link} to="/">Settings</Nav.Link>
                <Nav.Link as={Link} to="/">Subscription</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Container fluid className="mt-5">
  <h1>Welcome to the Admin Dashboard</h1>
  <p>Here you can monitor and manage your site's data and settings.</p>
  <div class="d-flex flex-row mt-5">
  <div class="card">
    <div class="card-header">
      <h4>Site Statistics</h4>
    </div>
    <div class="card-body justify-content-center">
      <ul class="list-unstyled stats-list">
        <li class="stats-item">
          <i class="bi bi-users stats-icon"></i>
          <div class="stats-info">
            <h5>Unresolved</h5>
            <p>60</p>
          </div>
        </li>
      </ul>
    </div>
  </div>

  <div class="card">
    <div class="card-header">
      <h4>Site Statistics</h4>
    </div>
    <div class="card-body">
      <ul class="list-unstyled stats-list">
        <li class="stats-item">
          <i class="bi bi-users stats-icon"></i>
          <div class="stats-info">
            <h5>Overdue</h5>
            <p>16</p>
          </div>
        </li>
      </ul>
    </div>
  </div>

  <div class="card">
    <div class="card-header">
      <h4>Site Statistics</h4>
    </div>
    <div class="card-body">
      <ul class="list-unstyled stats-list">
        <li class="stats-item">
          <i class="bi bi-users stats-icon"></i>
          <div class="stats-info">
            <h5>Open</h5>
            <p>43</p>
          </div>
        </li>
      </ul>
    </div>
  </div>

  <div class="card">
    <div class="card-header">
      <h4>Site Statistics</h4>
    </div>
    <div class="card-body">
      <ul class="list-unstyled stats-list">
        <li class="stats-item">
          <i class="bi bi-users stats-icon"></i>
          <div class="stats-info">
            <h5>Overdue</h5>
            <p>16</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
  <Row>
    <Col>
      <div className="card">
        <div className="card-header">
          <h4>Chart 1</h4>
        </div>
        <div className="card-body 1">
          <ResponsiveContainer width={800} height={500}>
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" name="PV" />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" name="UV" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Col>
    <Col>
      <div className="card">
        <div className="card-header">
          <h4>Chart 2</h4>
        </div>
        <div className="card-body 2">
          <ResponsiveContainer width={400} height={500}>
              <div className='text-center'>
                <p>Resolved</p>
                <h1>449</h1>
              </div>
              <div className='text-center'>
                <p>Received</p>
                <h1>449</h1>
              </div>
              <div className='text-center'>
                <p>Average fisrt response time</p>
                <h1>33m</h1>
              </div>
              <div className='text-center'>
                <p>Average response time</p>
                <h1>3h 8m</h1>
              </div>
              <div className='text-center'>
                <p>Resolution within LSA</p>
                <h1>94%</h1>
              </div>
          </ResponsiveContainer>
        </div>
      </div>
    </Col>
  </Row>
  <div className="row">
    <div className="col">
  <div className="card">
    <div className="card-header">
      <h4>Unresolved Ticket</h4>
      <p>Group Support</p>
    </div>
    <div className="card-body">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
          <th style={{ fontSize: '1em', fontWeight: 'bold', textTransform: 'uppercase', color:'purple'}}>Order ID</th>
          <th style={{ fontSize: '1em', fontWeight: 'bold', textTransform: 'uppercase', color:'purple'}}>View Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#1234</td>
            <td>John Doe</td>
          </tr>
          <tr>
            <td>#1235</td>
            <td>Jane Doe</td>
          </tr>
          <tr>
            <td>#1236</td>
            <td>Bob Smith</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  </div>
  <div className="col">
  <div className="card">
    <div className="card-header">
      <h4>Tooks</h4>
      <p>Today</p>
    </div>
  <Form>
  {['checkbox', 'radio'].map((type, index) => (
    <Form.Group key={`default-${type}-${index}`} className="mb-3" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <Form.Check // prettier-ignore
        custom
        type={type}
        id={`default-${type}-${index}`}
        label={`Default ${type}`}
        style={{ color: '#000080', marginRight: '1rem' }}
      />
      <Form.Text className="text-muted">
        This is a default {type} option.
      </Form.Text>

      <Form.Check
        custom
        disabled
        type={type}
        label={`Disabled ${type}`}
        id={`disabled-default-${type}-${index}`}
        style={{ color: '#000080', marginRight: '1rem' }}
      />
      <Form.Text className="text-muted">
        This is a disabled {type} option.
      </Form.Text>
    </Form.Group>
  ))}
</Form>
  </div>
</div>
</div>
  </Container>
  </div>

  );
};

export default AdminPage;