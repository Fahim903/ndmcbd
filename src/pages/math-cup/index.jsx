import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  PageTitleContainer,
  SectionSubtitle,
  SectionTitle,
} from "../../components/styles/Elements.style";
import { Section } from "../../components/styles/Page.style";
import NdmcBreadcrumbs from "../../components/breadcrumbs";
import Label from "../../components/ui/Label";
import usePageTitle from "../../hooks/usePageTitle";
import leaderboardData from "../../static-data/mathCupLeaderboard.json";

const rankLabelVariant = (rank) => {
  if (rank === 1) return "gold";
  if (rank === 2) return "silver";
  if (rank === 3) return "bronze";
  if (rank === 4) return "info";
  if (rank === 5) return "success";
  return null;
};

const ordinal = (rank) => {
  const mod100 = rank % 100;
  if (mod100 >= 11 && mod100 <= 13) return `${rank}th`;
  switch (rank % 10) {
    case 1:
      return `${rank}st`;
    case 2:
      return `${rank}nd`;
    case 3:
      return `${rank}rd`;
    default:
      return `${rank}th`;
  }
};

const StyledTableRow = styled(TableRow)(({ theme, rank }) => {
  let bgColorLight = null;
  let bgColorDark = null;

  if (rank === 1) {
    bgColorLight = "rgba(218, 165, 32, 0.15)";
    bgColorDark = "rgba(255, 215, 0, 0.15)";
  } else if (rank === 2) {
    bgColorLight = "rgba(112, 128, 144, 0.12)";
    bgColorDark = "rgba(192, 192, 192, 0.15)";
  } else if (rank === 3) {
    bgColorLight = "rgba(139, 69, 19, 0.12)";
    bgColorDark = "rgba(205, 127, 50, 0.15)";
  } else if (rank === 4) {
    bgColorLight = "rgba(51, 104, 227, 0.06)";
    bgColorDark = "rgba(51, 104, 227, 0.10)";
  } else if (rank === 5) {
    bgColorLight = "rgba(51, 104, 227, 0.03)";
    bgColorDark = "rgba(51, 104, 227, 0.05)";
  }

  return {
    ...(bgColorLight && {
      backgroundColor:
        theme.palette.mode === "light" ? bgColorLight : bgColorDark,
    }),
    "&:last-child td, &:last-child th": { border: 0 },
  };
});

const MathCup = () => {
  usePageTitle("Math Cup Leaderboard");

  return (
    <Section style={{ display: "block", padding: "20px 0px" }}>
      <PageTitleContainer style={{ marginBottom: "30px" }}>
        <SectionSubtitle>NDMC Math Cup - 2026</SectionSubtitle>
        <SectionTitle>Leaderboard</SectionTitle>
        <NdmcBreadcrumbs
          pagePath={[
            {
              name: "Math Cup",
              active: true,
            },
          ]}
        />
      </PageTitleContainer>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="math cup leaderboard table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Rank</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Institution</TableCell>
              <TableCell align="center">Correct Answers</TableCell>
              <TableCell align="center">Honourable Mentions</TableCell>
              <TableCell align="center">Total Points</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leaderboardData.map((row) => (
              <StyledTableRow key={row.name} rank={row.rank}>
                <TableCell align="center">
                  {rankLabelVariant(row.rank) ? (
                    <Label
                      text={ordinal(row.rank)}
                      variant={rankLabelVariant(row.rank)}
                      filled
                    />
                  ) : (
                    <Typography variant="body2" fontWeight={500}>
                      {ordinal(row.rank)}
                    </Typography>
                  )}
                </TableCell>
                <TableCell align="left">
                  <Typography variant="subtitle2">{row.name}</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="body2" sx={{ color: "text.disabled" }}>
                    {row.institution}
                  </Typography>
                </TableCell>
                <TableCell align="center">{row.correctAnswers}</TableCell>
                <TableCell align="center">{row.honourableMentions}</TableCell>
                <TableCell align="center">
                  <Label text={row.totalPoints} variant="success" filled />
                </TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ mt: 2 }}>
        <Typography variant="body2" sx={{ color: "text.disabled" }}>
          Each round scores (Correct Answers &times; 3) + (Honourable Mentions &times; 1),
          then applies a round multiplier: Group Stage &times;1, Round of 32 &times;2,
          Round of 16 &times;3, Quarter Final &times;4. Total Points is the sum across all
          rounds played.
        </Typography>
      </Box>
    </Section>
  );
};

export default MathCup;
