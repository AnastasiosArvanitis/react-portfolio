import React from "react";

import {
  SocialProvider,
  SocialLink,
} from "@mui-treasury/components/socialLink";
import { useRoundSocialLinkStyles } from "@mui-treasury/styles/socialLink/round";

import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";

import "./Footer.scss";

const useStyles = makeStyles({
  socialStyles: {
    fontSize: "1rem",
    marginRight: 15,
    color: "#e6e6e6",
    borderColor: "#e6e6e6",
    "&:hover": {
      cursor: "pointer",
      transform: "translateY(-5px)",
      color: "#e6e6e6",
      borderColor: "#e6e6e6"
    },
    "&:visited": {
      color: "#e6e6e6",
      borderColor: "#e6e6e6",
    },
    "&:active": {
      color: "#e6e6e6",
      borderColor: "#e6e6e6",
    },
  },
});

const Footer = () => {
  let width = document.body.clientWidth;
  let height = document.body.clientHeight;

  const copyRightStyles = {
    fontSize: "1em",
    paddingTop: "2px",
  };

  const classes = useStyles();

  /* const socialStyles = {
        fontSize: '30px'
    } */

  return (
    <footer>
      {/* <p>{`w: ${width} h: ${height}`}</p> */}

      <p>
        Anastasios Arvanitis
        <Icon style={copyRightStyles}> copyright</Icon> 2020
      </p>
      <p>
        <SocialProvider useStyles={useRoundSocialLinkStyles}>
          <SocialLink
            className={classes.socialStyles}
            brand={"FacebookCircle"}
            href={"https://www.facebook.com/329099994318459"}
          />
          <SocialLink
            className={classes.socialStyles}
            brand={"LinkedIn"}
            href={"https://www.linkedin.com/in/anastasiosarvanitis"}
          />
          <SocialLink
            className={classes.socialStyles}
            brand={"GithubCircle"}
            href={"https://github.com/AnastasiosArvanitis/react-portfolio"}
          />
        </SocialProvider>
      </p>
    </footer>
  );
};

export default Footer;

/* <Link to={{ pathname: "https://www.facebook.com/329099994318459" }} target="_blank" >
                <FacebookIcon className='media-icons' style={socialStyles} />
            </Link>
                    <span className='f-seperator'></span>
            <Link to={{ pathname: "https://www.linkedin.com/in/anastasiosarvanitis" }} target="_blank" >
                <LinkedInIcon className='media-icons' style={socialStyles} />
            </Link>
                    <span className='f-seperator'></span>
            <Link to={{ pathname: "https://github.com/AnastasiosArvanitis/reactSite" }} target="_blank" >
                <GitHubIcon className='media-icons' style={socialStyles} />
            </Link> */
