/** @format */
import { Tabs } from "antd"
import React from "react"
const { TabPane } = Tabs

const onChange = (key) => {
  console.log(key)
}

const Navbar = () => {
  return (
    <>
      {" "}
      <Tabs defaultActiveKey="2" onChange={onChange}>
        <TabPane tab="STations" key="1"></TabPane>
        <TabPane tab="OPerators" key="2"></TabPane>
        <TabPane tab="Watchers" key="3"></TabPane>
        <TabPane tab="Resources" key="4"></TabPane>
        <TabPane tab="Sensors" key="5"></TabPane>
      </Tabs>
    </>
  )
}

export default Navbar
