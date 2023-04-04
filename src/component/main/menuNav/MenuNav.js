/** @format */

import { React } from "react";
import { Link } from "react-router-dom";
import styles from "./MenuNav.module.scss";
import { GiSettingsKnobs } from "react-icons/gi";
import MovingArrow from "./movingArrow/MovingArrow";

const MenuNav = (props) => {
  // const dispatch = useContext(ValueDispatchContext);
  // dispatch();
  // console.log(location);
  const handleClickLink = () => {};

  return (
    <div
      className={`${styles.fixed_cover}  ${
        props.scrollPosition > 0 ? styles.postion : ""
      }`}
    >
      <div className={styles.flex}>
        <div className={styles.cover}>
          {" "}
          <MovingArrow />
          <div className={styles.inline}>
            <Link
              to="/populer"
              onClick={handleClickLink}
              className={styles.flexC}
            >
              <img
                src="/img/filter/popule.jpg"
                alt="이미지"
                className={styles.img}
              />
              인기 급상승
            </Link>
          </div>
          <div className={styles.inline}>
            <Link
              to="/beach"
              onClick={handleClickLink}
              className={styles.flexC}
            >
              <img
                src="/img/filter/beach.jpg"
                alt="이미지"
                className={styles.img}
              />
              해변 바로 앞
            </Link>
          </div>
          <div className={styles.inline}>
            <Link to="/" onClick={handleClickLink} className={styles.flexC}>
              <img
                src="/img/filter/castle.jpg"
                alt="이미지"
                className={styles.img}
              />
              캐슬
            </Link>{" "}
          </div>
          <div className={styles.inline}>
            <Link to="/" className={styles.flexC}>
              <img
                src="/img/filter/country.jpg"
                alt="이미지"
                className={styles.img}
              />
              한적한 시골
            </Link>{" "}
          </div>
          <div className={styles.inline}>
            <Link to="/" className={styles.flexC}>
              <img
                src="/img/filter/unble.jpg"
                alt="이미지"
                className={styles.img}
              />
              기상 천외한 숙소
            </Link>{" "}
          </div>
          <div className={styles.inline}>
            <Link to="/" className={styles.flexC}>
              <img
                src="/img/filter/korea.jpg"
                alt="이미지"
                className={styles.img}
              />
              한옥
            </Link>{" "}
          </div>
          <div className={styles.inline}>
            <Link to="/" className={styles.flexC}>
              <img
                src="/img/filter/farm.jpg"
                alt="이미지"
                className={styles.img}
              />
              농장
            </Link>{" "}
          </div>
          <div className={styles.inline}>
            <Link to="/" className={styles.flexC}>
              <img
                src="/img/filter/persnal.jpg"
                alt="이미지"
                className={styles.img}
              />
              개인실
            </Link>{" "}
          </div>
          <div className={styles.inline}>
            <Link to="/" className={styles.flexC}>
              <img
                src="/img/filter/piano.jpg"
                alt="이미지"
                className={styles.img}
              />
              그랜드 피아노
            </Link>{" "}
          </div>
          <div className={styles.inline}>
            <Link to="/" className={styles.flexC}>
              <img
                src="/img/filter/luxe.jpg"
                alt="이미지"
                className={styles.img}
              />
              Luxe
            </Link>{" "}
          </div>
          <div className={styles.inline}>
            <Link to="/" className={styles.flexC}>
              <img
                src="/img/filter/unble.jpg"
                alt="이미지"
                className={styles.img}
              />
              기상 천외한 숙소
            </Link>{" "}
          </div>
          <div className={styles.inline}>
            <Link to="/" className={styles.flexC}>
              <img
                src="/img/filter/unble.jpg"
                alt="이미지"
                className={styles.img}
              />
              기상 천외한 숙소
            </Link>{" "}
          </div>
          <div className={styles.inline}>
            <Link to="/" className={styles.flexC}>
              <img
                src="/img/filter/unble.jpg"
                alt="이미지"
                className={styles.img}
              />
              기상 천외한 숙소
            </Link>
          </div>
          <div className={styles.inline}>
            <Link to="/" className={styles.flexC}>
              <img
                src="/img/filter/unble.jpg"
                alt="이미지"
                className={styles.img}
              />
              기상 천외한 숙소
            </Link>
          </div>
          <div className={styles.inline}>
            <Link to="/" className={styles.flexC}>
              <img
                src="/img/filter/unble.jpg"
                alt="이미지"
                className={styles.img}
              />
              기상 천외한 숙소
            </Link>
          </div>
          <div className={styles.inline}>
            <Link to="/" className={styles.flexC}>
              <img
                src="/img/filter/unble.jpg"
                alt="이미지"
                className={styles.img}
              />
              기상 천외한 숙소
            </Link>
          </div>
          <div className={styles.inline}>
            <Link to="/" className={styles.flexC}>
              <img
                src="/img/filter/unble.jpg"
                alt="이미지"
                className={styles.img}
              />
              기상 천외한 숙소
            </Link>
          </div>
          <div className={styles.inline}>
            <Link to="/" className={styles.flexC}>
              <img
                src="/img/filter/unble.jpg"
                alt="이미지"
                className={styles.img}
              />
              기상 천외한 숙소
            </Link>
          </div>
          <div className={styles.inline}>
            <Link to="/" className={styles.flexC}>
              <img
                src="/img/filter/unble.jpg"
                alt="이미지"
                className={styles.img}
              />
              기상 천외한 숙소
            </Link>
          </div>
          <div className={styles.inline}>
            <Link to="/" className={styles.flexC}>
              <img
                src="/img/filter/unble.jpg"
                alt="이미지"
                className={styles.img}
              />
              기상 천외한 숙소
            </Link>
          </div>
          <div className={styles.inline}>
            <Link to="/" className={styles.flexC}>
              <img
                src="/img/filter/unble.jpg"
                alt="이미지"
                className={styles.img}
              />
              기상 천외한 숙소
            </Link>
          </div>
          <div className={styles.inline}>
            <Link to="/" className={styles.flexC}>
              <img
                src="/img/filter/unble.jpg"
                alt="이미지"
                className={styles.img}
              />
              기상 천외한 숙소
            </Link>
          </div>
        </div>

        <div className={styles.buttonCover}>
          <button className={styles.button}>
            <div className={styles.text_cover}>
              <GiSettingsKnobs />
              <span className={styles.text}>필터</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuNav;
