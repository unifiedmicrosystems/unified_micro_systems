import React from "react"
import { Link } from "gatsby"
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
 
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        style: {
          color: isCurrent ? "red" : "black"
        }
      };
    }}
  />
);

const NavbarLinks = () => {
  return (
    <>
    <div className="d-flex justify-content-end col-sm-1 col-md-12 menu-lg dekstop">
                      <ul className="menus">
                      <nav>
                        <li><NavLink to="/"><i className="menu_icon blank fa"></i><span>Home</span><span className="plus"></span></NavLink></li>
                        <li className="menu-item">
						<NavLink to="#"><i className="menu_icon blank fa"></i><span>About</span><span className="plus"></span></NavLink>
                          <div className="second">
                            <div className="inner">
                              <ul>
                                <li className="sub-menu-item"><NavLink to="/our-story/"><i className="menu_icon blank fa"></i><span>Our Story</span></NavLink></li>
                                <li className="sub-menu-item"><NavLink to="/technology_partners" className=""><i className="menu_icon blank fa"></i><span>Technology Partners</span></NavLink></li>
                                <li className="sub-menu-item"><NavLink to="/reseller_business_partners" className=""><i className="menu_icon blank fa"></i><span>Resellers &amp; Business Partners</span></NavLink></li>
                                <li className="sub-menu-item"><NavLink to="/terms_and_conditions" className=""><i className="menu_icon blank fa"></i><span>Terms and Conditions</span></NavLink></li>
                               <li className="sub-menu-item"><NavLink to="/careers" className=""><i className="menu_icon blank fa"></i><span>Careers</span></NavLink></li>
                              </ul>
                            </div>
                          </div>
                        </li>

                        <li className="menu-item wide">
						<NavLink to="#" className=""><i className="menu_icon blank fa"></i><span>Solutions</span><span className="plus"></span></NavLink>
                           <div className="second" style={{width:'1140px'}}>
                            <div className="inner">
                              <ul>
                                <li className="sub-menu-item"><NavLink to="javascript:void(0)" className=" no_link"><i className="menu_icon blank fa"></i><span>Service Delivery</span></NavLink>
                                  <ul>
                                    <li className="sub-menu-item"><NavLink to="/managed_services_uae_phillippines" className=""><i className="menu_icon blank fa"></i><span>Managed Services in UAE &amp; Philippines</span></NavLink></li>
                                    <li className="sub-menu-item"><NavLink to="/hosted_solutions" className=""><i className="menu_icon blank fa"></i><span>Hosted Solutions</span></NavLink></li>
                                    <li className="sub-menu-item"><NavLink to="/disaster_recovery_business_continuity" className=""><i className="menu_icon blank fa"></i><span>Disaster Recovery &amp; Business Continuity</span></NavLink></li>
                                  </ul>
                                </li>
                                <li className="sub-menu-item">
                                  <NavLink to="#" className="no_link"><i className="menu_icon blank fa"></i><span>Consultancy</span></NavLink>
                                  <ul>
                                    <li className="sub-menu-item"><NavLink to="/strategic_it_planning_architecture" className=""><i className="menu_icon blank fa"></i><span>Strategic IT Planning &amp; Architecture</span><span className="plus"></span></NavLink></li>
                                    <li className="sub-menu-item"><NavLink to="/network_end_point_security" className=""><i className="menu_icon blank fa"></i><span>Network &amp; End-Point Security Solutions</span><span className="plus"></span></NavLink></li>
                                    <li className="sub-menu-item"><NavLink to="/software_development" className=""><i className="menu_icon blank fa"></i><span>Software Development</span></NavLink></li>
                                  </ul>
                                </li>
                                <li className="sub-menu-item">
                                  <NavLink to="#" className="no_link"><i className="menu_icon blank fa"></i><span>Infrastructure</span></NavLink>
                                  <ul>
                                    <li className="sub-menu-item"><NavLink to="/it_office_setup_uae_phillippines" className=""><i className="menu_icon blank fa"></i><span>IT Office Setup in UAE &amp; Philippines</span></NavLink></li>
                                    <li className="sub-menu-item"><NavLink to="/smart_building_home_automation" className=""><i className="menu_icon blank fa"></i><span>Smart Building, Office &amp; Home Automation Solutions</span></NavLink></li>
                                    <li className="sub-menu-item"><NavLink to="/structured_cabling_wireless" className=""><i className="menu_icon blank fa"></i><span>Structured Cabling &amp; Wireless</span></NavLink></li>
                                  </ul>
                                </li>
                                <li className="sub-menu-item">
                                  <NavLink to="#" className=" no_link" style={{cursor: 'default'}} ><i className="menu_icon blank fa"></i><span>Communications</span></NavLink>
                                  <ul>
                                    <li className="sub-menu-item"><NavLink to="/unified_communications" className=""><i className="menu_icon blank fa"></i><span>Unified Communications</span><span className="plus"></span></NavLink></li>
                                    <li className="sub-menu-item"><NavLink to="/contact_centers" className=""><i className="menu_icon blank fa"></i><span>Contact Centers</span><span className="plus"></span></NavLink></li>
                                    <li className="sub-menu-item"><NavLink to="/hold_music_ivr_voice_recording" className=""><i className="menu_icon blank fa"></i><span>Hold Music &amp; IVR Voice Recording</span></NavLink></li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                          </div> 
                        </li>
                        <li className="menu-item">
                           <NavLink to="#" className=""><i className="menu_icon blank fa"></i><span>Resources</span><span className="plus"></span></NavLink>
                          <div className="second">
                            <div className="inner">
                              <ul>
                                <li className="sub-menu-item"><NavLink to="/articles" className=""><i className="menu_icon blank fa"></i><span>Articles</span><span className="plus"></span></NavLink></li>
                                <li className="sub-menu-item"><NavLink to="/open_source_software" className=""><i className="menu_icon blank fa"></i><span>Open Source Software</span></NavLink></li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li className="menu-item"><NavLink to="/contact" className=""><i className="menu_icon blank fa"></i><span>Contact</span></NavLink></li>

                        <li className="search">
                          <div className="header_inner_right">
                            <div className="side_menu_button">
                            
                              <Link to="/search_result">
                                <i className="qode_icon_font_awesome fa fa-search "></i>  
                              </Link>
                            </div>
                          </div>
                        </li>
                        </nav>
                      </ul>
                    </div>
                    <div className="d-flex justify-content-end col-sm-1 col-md-12 menu-lg">
                      <ul className="menus">
                      <nav>
                      <Accordion allowMultipleExpanded="true">
                        <li><NavLink to="/"><i className="menu_icon blank fa"></i><span>Home</span><span className="plus"></span></NavLink></li>
                        <li className="menu-item">
                          <AccordionItem>
                           <AccordionItemHeading>
                              <AccordionItemButton><NavLink to="#"><i className="menu_icon blank fa"></i><span>About</span><span className="plus"></span></NavLink></AccordionItemButton>
                           </AccordionItemHeading>
                           <AccordionItemPanel>
                          <div className="second">
                            <div className="inner">
                              <ul>
                                <li className="sub-menu-item"><NavLink to="/our-story/"><i className="menu_icon blank fa"></i><span>Our Story</span></NavLink></li>
                                <li className="sub-menu-item"><NavLink to="/technology_partners" className=""><i className="menu_icon blank fa"></i><span>Technology Partners</span></NavLink></li>
                                <li className="sub-menu-item"><NavLink to="/reseller_business_partners" className=""><i className="menu_icon blank fa"></i><span>Resellers &amp; Business Partners</span></NavLink></li>
                                <li className="sub-menu-item"><NavLink to="/terms_and_conditions" className=""><i className="menu_icon blank fa"></i><span>Terms and Conditions</span></NavLink></li>
                               <li className="sub-menu-item"><NavLink to="/careers" className=""><i className="menu_icon blank fa"></i><span>Careers</span></NavLink></li>
                              </ul>
                            </div>
                          </div>
                          </AccordionItemPanel>
                        </AccordionItem>
                        </li>

                        <li className="menu-item wide">
                          <AccordionItem>
                           <AccordionItemHeading>
                              <AccordionItemButton><NavLink to="#" className=""><i className="menu_icon blank fa"></i><span>Solutions</span><span className="plus"></span></NavLink></AccordionItemButton>
                           </AccordionItemHeading>
                           <AccordionItemPanel>
                           <div className="second" style={{width:'1140px'}}>
                            <div className="inner">
                              <ul>
                                <li className="sub-menu-item"><NavLink to="javascript:void(0)" className=" no_link"><i className="menu_icon blank fa"></i><span>Service Delivery</span></NavLink>
                                  <ul>
                                    <li className="sub-menu-item"><NavLink to="/managed_services_uae_phillippines" className=""><i className="menu_icon blank fa"></i><span>Managed Services in UAE &amp; Philippines</span></NavLink></li>
                                    <li className="sub-menu-item"><NavLink to="/hosted_solutions" className=""><i className="menu_icon blank fa"></i><span>Hosted Solutions</span></NavLink></li>
                                    <li className="sub-menu-item"><NavLink to="/disaster_recovery_business_continuity" className=""><i className="menu_icon blank fa"></i><span>Disaster Recovery &amp; Business Continuity</span></NavLink></li>
                                  </ul>
                                </li>
                                <li className="sub-menu-item">
                                  <NavLink to="#" className="no_link"><i className="menu_icon blank fa"></i><span>Consultancy</span></NavLink>
                                  <ul>
                                    <li className="sub-menu-item"><NavLink to="/strategic_it_planning_architecture" className=""><i className="menu_icon blank fa"></i><span>Strategic IT Planning &amp; Architecture</span><span className="plus"></span></NavLink></li>
                                    <li className="sub-menu-item"><NavLink to="/network_end_point_security" className=""><i className="menu_icon blank fa"></i><span>Network &amp; End-Point Security Solutions</span><span className="plus"></span></NavLink></li>
                                    <li className="sub-menu-item"><NavLink to="/software_development" className=""><i className="menu_icon blank fa"></i><span>Software Development</span></NavLink></li>
                                  </ul>
                                </li>
                                <li className="sub-menu-item">
                                  <NavLink to="#" className="no_link"><i className="menu_icon blank fa"></i><span>Infrastructure</span></NavLink>
                                  <ul>
                                    <li className="sub-menu-item"><NavLink to="/it_office_setup_uae_phillippines" className=""><i className="menu_icon blank fa"></i><span>IT Office Setup in UAE &amp; Philippines</span></NavLink></li>
                                    <li className="sub-menu-item"><NavLink to="/smart_building_home_automation" className=""><i className="menu_icon blank fa"></i><span>Smart Building, Office &amp; Home Automation Solutions</span></NavLink></li>
                                    <li className="sub-menu-item"><NavLink to="/structured_cabling_wireless" className=""><i className="menu_icon blank fa"></i><span>Structured Cabling &amp; Wireless</span></NavLink></li>
                                  </ul>
                                </li>
                                <li className="sub-menu-item">
                                  <NavLink to="#" className=" no_link" style={{cursor: 'default'}} ><i className="menu_icon blank fa"></i><span>Communications</span></NavLink>
                                  <ul>
                                    <li className="sub-menu-item"><NavLink to="/unified_communications" className=""><i className="menu_icon blank fa"></i><span>Unified Communications</span><span className="plus"></span></NavLink></li>
                                    <li className="sub-menu-item"><NavLink to="/contact_centers" className=""><i className="menu_icon blank fa"></i><span>Contact Centers</span><span className="plus"></span></NavLink></li>
                                    <li className="sub-menu-item"><NavLink to="/hold_music_ivr_voice_recording" className=""><i className="menu_icon blank fa"></i><span>Hold Music &amp; IVR Voice Recording</span></NavLink></li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                          </div> 
                          </AccordionItemPanel>
                        </AccordionItem>
                        </li>
                        <li className="menu-item">
                           <AccordionItem>
                           <AccordionItemHeading>
                              <AccordionItemButton><NavLink to="#" className=""><i className="menu_icon blank fa"></i><span>Resources</span><span className="plus"></span></NavLink></AccordionItemButton>
                           </AccordionItemHeading>
                           <AccordionItemPanel>
                          <div className="second">
                            <div className="inner">
                              <ul>
                                <li className="sub-menu-item"><NavLink to="/articles" className=""><i className="menu_icon blank fa"></i><span>Articles</span><span className="plus"></span></NavLink></li>
                                <li className="sub-menu-item"><NavLink to="/open_source_software" className=""><i className="menu_icon blank fa"></i><span>Open Source Software</span></NavLink></li>
                              </ul>
                            </div>
                          </div>
                          </AccordionItemPanel>
                        </AccordionItem>
                        </li>
                        <li className="menu-item"><NavLink to="/contact" className=""><i className="menu_icon blank fa"></i><span>Contact</span></NavLink></li>

                        <li className="search">
                          <div className="header_inner_right">
                            <div className="side_menu_button">
                            
                              <Link to="/search_result">
                                <i className="qode_icon_font_awesome fa fa-search "></i>  
                              </Link>
                            </div>
                          </div>
                        </li>
                        </Accordion>
                        </nav>
                      </ul>
                    </div>
    </>
  )
}

export default NavbarLinks