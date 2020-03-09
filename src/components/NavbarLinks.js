import React from "react"
import { Link } from "gatsby"

const NavbarLinks = () => {
  return (
    <>
                        <ul className="menu-main-menu">
                          <li className="menu-item">
                            <Link to="/" className=" current "><span>Home</span></Link>
                          </li>
                          <li className="menu-item has-sub-menu open_sub">
                            <Link to="#" className="current"><span>About</span></Link>
                            <ul className="sub_menu">
                              <li className="menu-item">
                                <Link to="/our_story" className=""><span>Our Story</span></Link>
                              </li>
                              <li className="menu-item">
                                <Link to="/technology_partners" className=""><span>Technology Partners</span></Link>
                              </li>
                              <li className="menu-item">
                                <Link to="/resellers_business_partners" className="">
                                  <span>Resellers &amp; Business Partners</span>
                                </Link>
                              </li>
                              <li className="menu-item">
                                <Link to="/terms_and_conditions" className=""><span>Terms and Conditions</span></Link>
                              </li>
                              <li className="menu-item">
                                <Link to="/careers" className=""><span>Careers</span></Link>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item has-sub-menu open_sub">
                            <Link to="#" className=""><span>Solutions</span></Link>
                              <ul className="sub_menu">
                              <li className="menu-item menu-item-has-children has_sub open_sub"><h3><span>Service Delivery</span></h3>
                                <ul className="sub_menu">
                                  <li className="menu-item"><Link to="/managed_services_uae_philippines" className=""><span>Managed Services in UAE &amp; Philippines</span></Link></li>
                                  <li className="menu-item"><Link to="/hosted_solutions" className=""><span>Hosted Solutions</span></Link></li>
                                  <li className="menu-item"><Link to="/disaster_recovery_business_continuity" className=""><span>Disaster Recovery &amp; Business Continuity</span></Link></li>
                                </ul>
                              </li>
                              <li className="menu-item has-sub-menu"><h3><span>Consultancy</span></h3>
                                <ul className="sub_menu">
                                  <li className="menu-item"><Link to="/strategic_it_planning_architecture" className=""><span>Strategic IT Planning &amp; Architecture</span></Link></li>
                                  <li className="menu-item"><Link to="/network_end_point_security" className=""><span>Network &amp; End-Point Security Solutions</span></Link></li>
                                  <li className="menu-item"><Link to="/software_development" className=""><span>Software Development</span></Link></li>
                                </ul>
                              </li>
                              <li className="menu-item menu-item-has-children has-sub-menu"><h3><span>Infrastructure</span></h3>
                                <ul className="sub_menu">
                                  <li className="menu-item"><Link to="/it_office_setup_uae_philippines" className=""><span>IT Office Setup in UAE &amp; Philippines</span></Link></li>
                                  <li className="menu-item"><Link to="/smart_building_home_automation" className=""><span>Smart Building, Office &amp; Home Automation Solutions</span></Link></li>
                                  <li className="menu-item"><Link to="/structured_cabling_wireless" className=""><span>Structured Cabling &amp; Wireless</span></Link></li>
                                </ul>
                              </li>
                              <li className="menu-item menu-item-has-children has-sub-menu"><h3><span>Communications</span></h3>
                                <ul className="sub_menu">
                                  <li className="menu-item"><Link to="/unified_communications" className=""><span>Unified Communications</span></Link></li>
                                  <li className="menu-item"><Link to="/contact_centers" className=""><span>Contact Centers</span></Link></li>
                                  <li className="menu-item"><Link to="/hold_music_ivr_voice_recording" className=""><span>Hold Music &amp; IVR Voice Recording</span></Link></li>
                                </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item menu-item-has-children  has-sub-menu"><Link to="#" className=""><span>Resources</span></Link>
                          <ul className="sub_menu">
                            <li className="menu-item"><Link to="/articles" className=""><span>Articles</span></Link></li>
                            <li className="menu-item"><Link to="/open_source_software" className=""><span>Open Source Software</span></Link></li>
                          </ul>
                        </li>
                        <li className="menu-item"><Link to="/contact" className=""><span>Contact</span></Link></li>
                      </ul>
    </>
  )
}

export default NavbarLinks