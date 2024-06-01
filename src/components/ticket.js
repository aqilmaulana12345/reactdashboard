import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';

function Ticket() {
  const data = [
    { id: 1, ticketDetails: 'Mark', customerName: 'Otto', dateCreated: '2024-06-01', priority: 'good' },
    { id: 2, ticketDetails: 'Jacob', customerName: 'Thornton', dateCreated: '2024-06-02',  priority: 'good'  },
    { id: 3, ticketDetails: 'Larry', customerName: 'Bird', dateCreated: '2024-06-03',  priority: 'good'  },
    { id: 4, ticketDetails: 'John', customerName: 'Doe', dateCreated: '2024-06-04', priority: 'good'  },
    { id: 5, ticketDetails: 'Jane', customerName: 'Smith', dateCreated: '2024-06-05', priority: 'good'  },
    { id: 6, ticketDetails: 'Michael', customerName: 'Brown', dateCreated: '2024-06-06',  priority: 'good'  },
    { id: 7, ticketDetails: 'Emily', customerName: 'Johnson', dateCreated: '2024-06-07',  priority: 'good'  },
    { id: 8, ticketDetails: 'Chris', customerName: 'Lee', dateCreated: '2024-06-08',  priority: 'good'  },
    { id: 9, ticketDetails: 'Alice', customerName: 'Williams', dateCreated: '2024-06-09',  priority: 'good'  },
    { id: 10, ticketDetails: 'David', customerName: 'Taylor', dateCreated: '2024-06-10',  priority: 'good'  }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Calculate the number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Get the data for the current page
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h1 style={{ fontSize: '3.5em', textAlign:'center'}}>Ticket List</h1>
       {/* Mengatur ukuran font menjadi 1.5em */}
      <Table striped>
        <thead>
          <tr>
            <th  style={{ fontSize: '1.0em' }}>#</th>
            <th style={{ fontSize: '1.0em' }}>Ticket Details</th>
            <th  style={{ fontSize: '1.0em' }}>Customer Name</th>
            <th  style={{ fontSize: '1.0em' }}>Date Created</th>
            <th  style={{ fontSize: '1.0em' }}>Priority</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.ticketDetails}</td>
              <td>{item.customerName}</td>
              <td>{item.dateCreated}</td>
              <td>{item.priority}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        <Pagination.First onClick={() => handleClick(1)} disabled={currentPage === 1} />
        <Pagination.Prev onClick={() => handleClick(currentPage - 1)} disabled={currentPage === 1} />
        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => handleClick(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={() => handleClick(currentPage + 1)} disabled={currentPage === totalPages} />
        <Pagination.Last onClick={() => handleClick(totalPages)} disabled={currentPage === totalPages} />
      </Pagination>
    </div>
  );
}

export default Ticket;
