const getStyles = () => ({
  title: {
    fontSize: 20,
    padding: '15px',
    marginBottom: '50px',
    fontWeight: 'bold',
  },
});
const Title = () => {
  const styles = getStyles();
  return <h1 style={styles.title}>POPLE AND THEIR CARS</h1>;
};

export default Title;
