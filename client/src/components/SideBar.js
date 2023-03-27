import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

function sideBar() {
    const rooms = ['first room', 'second room', 'third room'];
  return (
    <>
      <h1>Available rooms</h1>
      <ListGroup>
        {rooms.map((rooms, idx) => (
            <ListGroupItem key={idx}>
                {rooms}
            </ListGroupItem>
        ))}
      </ListGroup>
      <h2>Members</h2>
    </>
  )
}

export default sideBar
