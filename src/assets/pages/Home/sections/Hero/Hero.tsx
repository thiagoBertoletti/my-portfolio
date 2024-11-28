import { styled, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import DownloadIcon from "@mui/icons-material/Download";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Hero = () => {
  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
    height: "100vh",
  }));

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <div>xs=8</div>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography color="primary" variant="h1" textAlign="center">
                Thiago Bertoletti
              </Typography>
              <Typography color="primary" variant="h2" textAlign="center">
                I'm a Front-end Engineer
              </Typography>
              <Grid container display="flex" justifyContent="center">
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <button>
                    <DownloadIcon />
                    Download CV
                  </button>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <button>
                    <MailOutlineIcon />
                    Contact me
                  </button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
