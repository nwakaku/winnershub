import React, { useState } from 'react';
import './admin.css';
import e from '../../images/a1.jpg';
import {AiOutlineHome, AiOutlineSetting,AiOutlineLock,AiOutlineLogout,AiOutlineBars,AiOutlineEye,AiOutlineShoppingCart,
    AiOutlineMoneyCollect,AiOutlineComment,AiOutlineUsergroupAdd, AiOutlineMessage,AiOutlineSearch} from 'react-icons/ai';
import { FiHelpCircle } from 'react-icons/fi';


const Index = () => {
    const [open, setOpen] = useState(true);

    return (
        <div className='admin_container'>
            <div className={ open ? 'navigation' : 'navigation navigation_active'}>
                <ul>
                    <li>
                        <a>
                            <span className='icon'><i>ul</i></span>
                            <span className='title'>Brand Name</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span className='icon'><i><AiOutlineHome/></i></span>
                            <span className='title'>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span className='icon'><i><AiOutlineUsergroupAdd/></i></span>
                            <span className='title'>Customers</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span className='icon'><i><AiOutlineMessage/></i></span>
                            <span className='title'>Message</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span className='icon'><i><FiHelpCircle/></i></span>
                            <span className='title'>Help</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span className='icon'><i><AiOutlineSetting/></i></span>
                            <span className='title'>Settings</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span className='icon'><i><AiOutlineLock/></i></span>
                            <span className='title'>Password</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span className='icon'><i><AiOutlineLogout/></i></span>
                            <span className='title'>Sign Out</span>
                        </a>
                    </li>
                </ul>
            </div>


        {/* main */}
        <div className={ open ? 'admin_main' : 'admin_stretch'}>
            <div className='topbar'>
                <div className='toggle' onClick={()=>setOpen(!open)
                }>
                    <i><AiOutlineBars/></i>
                </div>
                {/* search */}
                <div className='search'>
                    <label>
                        <input type='text' placeholder='Search here'/>
                        <i><AiOutlineSearch/></i>
                    </label>
                </div>
                {/* userImg */}
                <div className='user'>
                    <img src={e} alt='men whey dy alrigth' />
                </div>
            </div>

            {/* cards */}
            <div className='cardBox'>
                <div className='admin_card'>
                    <div>
                        <div className='numbers'>1,150</div>
                        <div className='cardName'>Daily Views</div>
                    </div>
                    <div classNmae='iconBx'>
                        <i><AiOutlineEye/></i>
                    </div>
                </div>
                <div className='admin_card'>
                    <div>
                        <div className='numbers'>80</div>
                        <div className='cardName'>Sales</div>
                    </div>
                    <div classNmae='iconBx'>
                        <i><AiOutlineShoppingCart/></i>
                    </div>
                </div>
                <div className='admin_card'>
                    <div>
                        <div className='numbers'>284</div>
                        <div className='cardName'>Comments</div>
                    </div>
                    <div classNmae='iconBx'>
                        <i><AiOutlineComment/></i>
                    </div>
                </div>
                <div className='admin_card'>
                    <div>
                        <div className='numbers'>$7,842</div>
                        <div className='cardName'>Earning</div>
                    </div>
                    <div classNmae='iconBx'>
                        <i><AiOutlineMoneyCollect/></i>
                    </div>
                </div>
            </div>

            {/* details list */}
            <div className='details'>
                <div className='recentOrders'>
                    <div className='cardHeader'>
                        <h2>Recent Orders</h2>
                        <a className='btn'>View All</a>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Price</td>
                                <td>Payment</td>
                                <td>Status</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Star REfrigerator</td>
                                <td>$1200</td>
                                <td>Paid</td>
                                <td><span className='status delivered'>Delivery</span></td>
                            </tr>
                            <tr>
                                <td>Apple Watch</td>
                                <td>$1200</td>
                                <td>Paid</td>
                                <td><span className='status delivered'>Delivery</span></td>
                            </tr>
                            <tr>
                                <td>Wall Fan</td>
                                <td>$110</td>
                                <td>Paid</td>
                                <td><span className='status pending'>Pending</span></td>
                            </tr>
                            <tr>
                                <td>Adidas Shoes</td>
                                <td>$620</td>
                                <td>Paid</td>
                                <td><span className='status return'>Return</span></td>
                            </tr>
                            <tr>
                                <td>Denim Shirts</td>
                                <td>$110</td>
                                <td>Due</td>
                                <td><span className='status inprogress'>In Progress</span></td>
                            </tr>
                            <tr>
                                <td>Star REfrigerator</td>
                                <td>$1200</td>
                                <td>Paid</td>
                                <td><span className='status delivered'>Delivery</span></td>
                            </tr>
                            <tr>
                                <td>Apple Watch</td>
                                <td>$1200</td>
                                <td>Paid</td>
                                <td><span className='status delivered'>Delivery</span></td>
                            </tr>
                            <tr>
                                <td>Wall Fan</td>
                                <td>$110</td>
                                <td>Paid</td>
                                <td><span className='status pending'>Pending</span></td>
                            </tr>
                            <tr>
                                <td>Adidas Shoes</td>
                                <td>$620</td>
                                <td>Paid</td>
                                <td><span className='status return'>Return</span></td>
                            </tr>
                            <tr>
                                <td>Denim Shirts</td>
                                <td>$110</td>
                                <td>Due</td>
                                <td><span className='status inprogress'>In Progress</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='recentCustomers'>
                    <div className='cardHeader'>
                        <h2>Recent Customers</h2>
                    </div>
                    <table>
                        <tr>
                            <td width='60px'>
                                <div className='imgBx'>
                                    <img src={e} />
                                </div>
                            </td>
                            <td>
                                <h4>David<br/><span>Italy</span></h4>
                            </td>
                        </tr>
                        <tr>
                            <td width='60px'>
                                <div className='imgBx'>
                                    <img src={e} />
                                </div>
                            </td>
                            <td>
                                <h4>David<br/><span>Italy</span></h4>
                            </td>
                        </tr>
                        <tr>
                            <td width='60px'>
                                <div className='imgBx'>
                                    <img src={e} />
                                </div>
                            </td>
                            <td>
                                <h4>David<br/><span>Italy</span></h4>
                            </td>
                        </tr>
                        <tr>
                            <td width='60px'>
                                <div className='imgBx'>
                                    <img src={e} />
                                </div>
                            </td>
                            <td>
                                <h4>David<br/><span>Italy</span></h4>
                            </td>
                        </tr>
                        <tr>
                            <td width='60px'>
                                <div className='imgBx'>
                                    <img src={e} />
                                </div>
                            </td>
                            <td>
                                <h4>David<br/><span>Italy</span></h4>
                            </td>
                        </tr>
                        <tr>
                            <td width='60px'>
                                <div className='imgBx'>
                                    <img src={e} />
                                </div>
                            </td>
                            <td>
                                <h4>David<br/><span>Italy</span></h4>
                            </td>
                        </tr>
                        <tr>
                            <td width='60px'>
                                <div className='imgBx'>
                                    <img src={e} />
                                </div>
                            </td>
                            <td>
                                <h4>David<br/><span>Italy</span></h4>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Index
