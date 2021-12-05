import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const Footer = () => (
  <footer>
    <Box bgcolor="text.secondary" color="white" sx={{ height: "20vh", p: 6 }}>
      <Container maxWidth="sm">
        <Box textAlign="center">
          Tweeter Application &reg; {new Date().getFullYear()}
        </Box>
      </Container>
    </Box>
  </footer>
);

export default Footer;
