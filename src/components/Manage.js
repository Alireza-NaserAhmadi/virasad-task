/** @format */
import { Card, Tag, Avatar, Button } from "antd"
import React, { useState } from "react"
import { UserOutlined } from "@ant-design/icons"

//icons
import { RiEditLine } from "react-icons/ri"
import { FaEllipsisV } from "react-icons/fa"
import { FiArrowLeft } from "react-icons/fi"

////

const { CheckableTag } = Tag
const tagsData = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

const nameCard1 = [
  "Savannah Nguyen",
  "Guy Hawkins",
  "Eleanor Pena",
  "Brookl Simmons",
  "Kathryn Murphy",
]
const nameCard2 = [
  "Savannah Nguyen",
  "Guy Hawkins",
  "Eleanor Pena",
  "Brookl Simmons",
]
const nameCard3 = ["Eleanor Pena", "Brookl Simmons"]

const Manage = () => {
  const [selectedTags, setSelectedTags] = useState(["Mon", "Tue", "Wed"])

  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag)
    console.log("You are interested in: ", nextSelectedTags)
    setSelectedTags(nextSelectedTags)
  }

  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-7 col-md-6 align-items-center">
            <FiArrowLeft className="manage-icon" />
            <span className="manage-text">Manage Shifts</span>
          </div>
          <div className="col-5 col-md-6 add-button">
            <Button className="manage-add-button">+ Add Shift</Button>
          </div>
        </div>

        <div className="row">
          <div className="mt-3 col-12  col-lg-6 col-xl-4">
            <Card
              style={{
                width: "100%",
                borderRadius: "8px",
              }}
            >
              <div className="card-time">
                <span className="card-time-text">
                  Morning | 7:00 AM - 2:00 PM
                </span>
                <RiEditLine className="edit-icon" />
              </div>

              <div className="card-day">
                {tagsData.map((tag) => (
                  <CheckableTag
                    style={{ marginTop: "5px" }}
                    key={tag}
                    checked={selectedTags.indexOf(tag) > -1}
                    onChange={(checked) => handleChange(tag, checked)}
                  >
                    {tag}
                  </CheckableTag>
                ))}
              </div>
              <div className="card-user">
                <div className="card-user-line">
                  <span className="card-user-line-text">Line 1 </span>

                  <FaEllipsisV className="card-user-line-icon" />
                </div>
                <div className="card-user-info">
                  {nameCard1.map((res, index) => (
                    <div key={index} className=" card-user-info-base">
                      <div className="col-2 avatar">
                        <Avatar icon={<UserOutlined />} />
                      </div>
                      <div className="col-7 card-user-info-name">
                        <span>{res}</span>
                      </div>
                      <div className="col-3 card-user-info-station">
                        <span>station-{index + 1}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-3 col-12 col-lg-6 col-xl-4">
            <Card
              style={{
                width: "100%",
                borderRadius: "8px",
              }}
            >
              <div className="card-time">
                <span className="card-time-text">
                  Afternoon | 2:00 PM - 9:00
                </span>
                <RiEditLine className="edit-icon" />
              </div>
              <div className="card-day">
                {tagsData.map((tag) => (
                  <CheckableTag
                    key={tag}
                    checked={selectedTags.indexOf(tag) > -1}
                    onChange={(checked) => handleChange(tag, checked)}
                  >
                    {tag}
                  </CheckableTag>
                ))}
              </div>
              <div className="card-user">
                <div className="card-user-line">
                  <span className="card-user-line-text">Line 1 </span>

                  <FaEllipsisV className="card-user-line-icon" />
                </div>
                <div className="card-user-info">
                  {nameCard2.map((res, index) => (
                    <div key={index} className=" card-user-info-base">
                      <div className="col-2 avatar">
                        <Avatar icon={<UserOutlined />} />
                      </div>
                      <div className="col-7 card-user-info-name">
                        <span>{res}</span>
                      </div>
                      <div className="col-3 card-user-info-station">
                        <span>station-{index + 1}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card-user">
                <div className="card-user-line">
                  <span className="card-user-line-text">Line 2 </span>

                  <FaEllipsisV className="card-user-line-icon" />
                </div>
                <div className="card-user-info">
                  {nameCard3.map((res, index) => (
                    <div key={index} className=" card-user-info-base">
                      <div className="col-2 avatar">
                        <Avatar icon={<UserOutlined />} />
                      </div>
                      <div className="col-7 card-user-info-name">
                        <span>{res}</span>
                      </div>
                      <div className="col-3 card-user-info-station">
                        <span>station-{index + 1}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          <div className=" mt-3 col-12 col-lg-6 col-xl-4">
            <Card
              style={{
                width: "100%",
                borderRadius: "8px",
              }}
            >
              <div className="card-time">
                <span className="card-time-text">
                  Night | 9:00 PM - 4:00 AM
                </span>
                <RiEditLine className="edit-icon" />
              </div>
              <div className="card-day">
                {tagsData.map((tag) => (
                  <CheckableTag
                    key={tag}
                    checked={selectedTags.indexOf(tag) > -1}
                    onChange={(checked) => handleChange(tag, checked)}
                  >
                    {tag}
                  </CheckableTag>
                ))}
              </div>
              <div className="card-user">
                <div className="card-user-line">
                  <span className="card-user-line-text">Line 1 </span>

                  <FaEllipsisV className="card-user-line-icon" />
                </div>
                <div className="card-user-info">
                  {nameCard3.map((res, index) => (
                    <div key={index} className=" card-user-info-base">
                      <div className="col-2 avatar">
                        <Avatar icon={<UserOutlined />} />
                      </div>
                      <div className="col-7 card-user-info-name">
                        <span>{res}</span>
                      </div>
                      <div className="col-3 card-user-info-station">
                        <span>station-{index + 1}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
export default Manage
