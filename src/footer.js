import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer style={styles.footer}>
        <br /> <br />denespeechatlas@rochester.edu © Joyce McDonough 2020
      </footer>
    );
  }
}

const styles = {
  footer: {
    clear: "both",
    textAlign: "center",
    padding: "40px",
    margin: "0",
    color: "#999",
    bottom: "0",
    background: "#F2F2F2",
    clear: "both",
    fontSize: "12px"
  }
};

export default Footer;
