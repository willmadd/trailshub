export default {
  pageTemplate: {
    backgroundColor: 'primary.three',
    boxShadow: 10,
    // maxWidth
  },
  leftBox: {
    mb: 4,
    mt: 2,
    mr: 0,
    pl: 4,
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
  },
  rightBox: { px: 4, width: '40%' },
  contentWrapper: {
    // display: 'grid',
    // gridTemplateColumns: '3fr 2fr',
    // gridGap: 32,
    display: 'flex',
    justifyContent: 'space-between',
    pb: 4,
  },
  image: {
    maxHeight: 320,
    objectFit: 'cover',
    width: 1,
  },
  trailHead: {
    backgroundColor: 'primary.main',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    pb: 1,
    pt: 2,
    px: 4,
  },
  page: {
    backgroundColor: 'primary.two',
  },
  title: {
    mt: 4,
  },
  summary: { mb: 2, mt: 2 },
  userLink: { color: 'white', textDecoration: 'underline' },
  trailInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    ml: 8,
  },
  trailIcon: {
    height: 40,
    width: 40,
  },
  statsWrap: {
    border: 1,
    borderRadius: 3,
    mt: 1,
    py: 2,
    pt: 2,
    backgroundColor: 'white',
    boxShadow: 1,
  },
  trailIconImg: {
    height: 40,
    width: 36,
  },
  description: {
    mt: 4,
  },
  titleWrap: {
    display: 'flex',
    alignItems: 'center',
  },
  routeTitle: {
    mr: 2,
  },
  leftHead: {
    display: 'flex',
  },
}
