export default function PageWithBackground({ children }) {
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/buses.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        padding: '2rem',
        color: 'white',
        position: 'relative'
      }}
    >
      <div style={{ position: 'relative', zIndex: 2 }}>{children}</div>
      <div
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 1
        }}
      />
    </div>
  );
}
