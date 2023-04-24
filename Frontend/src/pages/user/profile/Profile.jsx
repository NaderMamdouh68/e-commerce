import React from 'react'
import './profile.css'
import { FiEdit2, FiMail } from 'react-icons/fi'
import { BsTelephone } from 'react-icons/bs'
import {AiOutlineHistory } from 'react-icons/ai'
import { FaExpand } from "react-icons/fa";
import { FaRegTimesCircle } from "react-icons/fa";

function Profile() {

  const url = "https://previews.123rf.com/images/yupiramos/yupiramos1610/yupiramos161007352/64369849-young-man-avatar-isolated-icon-vector-illustration-design.jpg"
  const [Visible, setVisible] = React.useState(false);


  return (
    <>
      <div className='profile'>
        <div className="Cover_profile">
          <img src={require('../../../assits/cover.jpg')} alt="" srcset="" />
          <FaExpand
            type="button"
            className="btnEye"
            onClick={() => setVisible(true)}
          />
        </div>
        <div className="Image_Profile">
          <img src="https://i.pravatar.cc/40?img=2" alt="" srcset="" />
        </div>
        {/* <aside className="Side_bar">
        <div className='prof-info'><AiOutlineUser className='prof-ico'/> <span>User name</span></div>
        <div className='prof-info'><BsTelephone className='prof-ico'/>  <span>01333333333</span></div>
        <div className='prof-info'><FiMail className='prof-ico'/>  <span></span></div>
      </aside> */}
        <div className="Show_produacts">
          <h1><AiOutlineHistory/> History</h1>
          <div className="order-cont">

          <div className="order">
              <div className="image">
                <img src={require('../../../assits/prodect-16.jpg')} alt="" />
              </div>
              <div className="count_data">
              <span>name</span>
              <span>date</span>
              </div>
            </div>
            <div className="order">
              <div className="image">
                <img src={require('../../../assits/prodect-16.jpg')} alt="" />
              </div>
              <div className="count_data">
              <span>name</span>
              <span>date</span>
              </div>
            </div>
            <div className="order">
              <div className="image">
                <img src={require('../../../assits/prodect-16.jpg')} alt="" />
              </div>
              <div className="count_data">
              <span>name</span>
              <span>date</span>
              </div>
            </div>
            <div className="order">
              <div className="image">
                <img src={require('../../../assits/prodect-16.jpg')} alt="" />
              </div>
              <div className="count_data">
              <span>name</span>
              <span>date</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <dialog
        open={Visible}
        onHide={() => setVisible(false)}
        className="DialogContanet"
      >
        <div className="conImage">
          <img
            src=""
            alt="card__image"
            className="DialogImage"
            lazy="loading"
          />
          <FaRegTimesCircle
            type="button"
            className="btnClose"
            onClick={() => setVisible(false)}
          />
          <div className="card__footer card__footerDialog">
            <div className="user">
              <img
                src={`https://i.pravatar.cc/40?img=5`}
                alt="user__image"
                className="user__image"
              />
              <div className="user__info">
                <h5 className="authorName">
                  ssss
                </h5>
                <small>
                  ssss
                </small>
              </div>
            </div>
          </div>

        </div>
        <div className="ContanetDialog">
          <h4>
            sss
          </h4>
          <div><span>description</span><p>ssss</p></div>
          <div><span>content</span><p>ssss</p></div>

        </div>
        <a href="#" target="_blank" rel="noopener noreferrer">Go To Source</a>
      </dialog>
    </>
  )
}

export default Profile