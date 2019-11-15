import React from 'react'
import Box from './Box'
import '../css/Row.css'

const Row = props => {

  return (
    <div className="row">
      <div className="flex">
        <Box id="A"/>
        <Box id="B"/>
        <Box id="C"/>
        <Box id="D"/>
        <Box id="E"/>
        <Box id="F"/>
        <Box id="G"/>
        <Box id="H"/>
        <Box id="I"/>
      </div>
    </div>
  )
}

export default Row
