import React, { useEffect, useState } from "react";
import { Col, Container, Nav } from "react-bootstrap";
import { OPEN_OVERLAY, CLOSE_OVERLAY } from "../../../Actions/actionType";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoSearch } from "react-icons/go";
import {
  AiOutlineHeart,
  AiOutlineShopping,
  AiOutlineClose,
} from "react-icons/ai";
import logo from "../../../assents/3.png";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { toRight } from "../../animations/animations";
import CartSection from "../CartSection/CartSection";
import CategoryList from "./CategoryList";
import { useDispatch, useSelector } from "react-redux";
const Menu = () => {
  const [hamburger, setHamburger] = useState(false);
  const [scrollTop, setScrollTop] = useState("");
  const [fixMenu, setFixMenu] = useState(false);
  const [cart, setCart] = useState(false);
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);

  const overlay = useSelector((state) => state.overlay);
  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      if (scrollTop > 140) {
        setFixMenu(true);
      } else {
        setFixMenu(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);
  useEffect(() => {
    if (!overlay.open) {
      setHamburger(false);
    }
  }, [overlay.open]);
  const handleOpenHamburger = () => {
    setHamburger(true);
    dispatch({ type: OPEN_OVERLAY });
  };
  const handleCloseHamburger = () => {
    setHamburger(false);
    dispatch({ type: CLOSE_OVERLAY });
  };
  return (
    <>
      <Container
        fluid
        className={`main__menu  ${fixMenu ? "fixMenu" : ""}`}
        style={{ overflowy: "hidden", position: "relative" }}
      >
        <Container>
          <div className="menu">
            <div className="menu_hamburger">
              <GiHamburgerMenu
                onClick={handleOpenHamburger}
                style={{ fontSize: 25, marginRight: 10, cursor: "pointer" }}
              />
              <img src={logo} width="50" />
            </div>

            <Nav
              className={`${hamburger ? "active" : ""}`}
              style={{ zIndex: 99999 }}
            >
              <li className="closeHamburger">
                <span>
                  <AiOutlineClose
                    onClick={handleCloseHamburger}
                    style={{ fontSize: "1.5rem", cursor: "pointer" }}
                  />
                </span>
                <span>Available 24/7 at (018) 900-6690</span>
              </li>
              {/*    {data.map((item, index) => {
                return (
                  <NavItemComponent
                    key={index}
                    title={item.name}
                    link={item?.link}
                    items={
                      <>
                        <DropDownItem
                          title="home styles"
                          items={item.items?.map((_item, index) => {
                            return (
                              <>
                                <DropDownItem key={index} title={_item.name} />
                              </>
                            );
                          })}
                        />

                        <DropDownItem title="new Skins" />
                      </>
                    }
                    first
                  />
                );
              })}
 */}
              <NavLink className="nav__item  nav__item__mobile" to="/">
                <li>Home</li>
              </NavLink>
              <NavLink className="nav__item  nav__item__pc" to="/">
                <li>Home</li>
              </NavLink>
              {category.categories.length > 0 &&
                category.categories.map((item, index) => {
                  return (
                    <NavItemComponent
                      slug={item.slug}
                      key={item._id}
                      title={item.name}
                      items={item.children.map((_item) => {
                        return (
                          <DropDownItem slug={_item.slug} title={_item.name} />
                        );
                      })}
                      anime={
                        <CategoryList
                          items={item.children}
                          categoryImg={item.categoryImg.image}
                          category={item.name}
                        />
                      }
                      first
                    />
                  );
                })}
              {/*    <NavItemComponent title="New In" anime={<CategoryList />} first />
              <NavItemComponent
                title="Bulk Editor"
                anime={<BulkAnime />}
                first
              /> */}
            </Nav>

            <div className="menu__option">
              <div className="menu__option__search">
                <p>Search</p> <GoSearch />
              </div>
              <div className="menu__option__line"></div>
              <div className="menu__option__like">
                <AiOutlineHeart />
              </div>
              <div className="menu__option__login">
                <NavLink to="/register">
                  <IoPersonCircleOutline
                    className="ml-2 mr-2"
                    style={{ fontSize: "25px" }}
                  />
                </NavLink>
              </div>
              <NavLink to="/cart">
                <div
                  className="menu__option__cart"
                  style={{ cursor: "pointer" }}
                  /* onClick={() => setCart(true)} */
                >
                  <AiOutlineShopping />
                  <span>0</span>
                </div>
              </NavLink>
            </div>
          </div>
        </Container>
      </Container>
      <div className={`cart_section ${cart ? "active" : ""}`}>
        <CartSection setCart={setCart} />
      </div>
    </>
  );
};

const DropDownItem = ({ title, items, key, slug }) => {
  const [open, setOpen] = useState(false);
  const overlay = useSelector((state) => state.overlay);
  useEffect(() => {
    if (!overlay.open) {
      setOpen(false);
    }
  }, [overlay.open]);
  return (
    <>
      <li
        key={key}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className={`nav__item__drop item_drop_down_pc   ${
          open ? "active" : ""
        }`}
      >
        <li className="nav__item__drop__item">{title}</li>
        {items && <ul className="menu__drop__list">{items}</ul>}
      </li>
      <li
        className={`nav__item__drop nav__item__mobile p-0  ${
          open ? "active" : ""
        }`}
      >
        <li className="nav__item__drop__item  ">
          {slug ? (
            <NavLink to={`/category/${slug}`} className="w-100  h-100">
              {title}
            </NavLink>
          ) : (
            <>
              {title}
              <span>{items && <IoIosArrowForward />}</span>
            </>
          )}
        </li>

        <AnimatePresence exitBeforeEnter>
          {open && items && (
            <motion.ul
              className="menu__drop__list"
              variants={toRight}
              initial="hidden"
              animate="show"
              key={title}
              exit="exit"
            >
              <li className="backButton" onClick={() => setOpen(false)}>
                <IoIosArrowBack style={{ marginRight: 30 }} />
                {title}
              </li>

              {items}
            </motion.ul>
          )}
        </AnimatePresence>
      </li>
    </>
  );
};
const NavItemComponent = ({ title, first, items, anime, close, slug }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, []);
  const overlay = useSelector((state) => state.overlay);
  useEffect(() => {
    if (!overlay.open) {
      setOpen(false);
    }
  }, [overlay.open]);
  let className = first
    ? "nav__item  nav__item__pc "
    : " nav__item__pc nav__item__drop__item ";

  return (
    <>
      <li
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className={` ${className} line ${open ? "active" : ""}`}
      >
        <li style={{ textTransform: "capitalize" }}>{title}</li>

        {items && !anime && <ul className="menu__drop__list">{items}</ul>}
        {anime && <div className="anime__dropDown  ">{anime}</div>}
      </li>
      <li className={`nav__item  nav__item__mobile  ${open ? "active" : ""}`}>
        <li onClick={() => setOpen(true)}>
          {title} <span>{items && <IoIosArrowForward />}</span>
        </li>
        <AnimatePresence exitBeforeEnter>
          {open && (
            <motion.ul
              className="menu__drop__list"
              variants={toRight}
              initial="hidden"
              animate="show"
              exit="exit"
              key={title}
            >
              <li className="backButton" onClick={() => setOpen(false)}>
                <IoIosArrowBack style={{ marginRight: 30 }} />
                {title}
              </li>
              <DropDownItem slug={title} title={`all ${title}`} />
              {items}
            </motion.ul>
          )}
        </AnimatePresence>
      </li>
    </>
  );
};

export default Menu;
