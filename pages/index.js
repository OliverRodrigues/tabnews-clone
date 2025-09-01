
function Home() {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #f8ffae 0%, #43c6ac 100%)',
        }}>
            <h1 style={{
                color: '#ff4081',
                fontFamily: 'Cursive, Comic Sans MS, sans-serif',
                fontSize: '3rem',
                textShadow: '2px 2px 8px #fff, 0 0 10px #ff4081',
                marginBottom: '1rem',
                textAlign: 'center',
                animation: 'pulse 2s infinite',
            }}>
                Se me ama dá uma risadinha
                <span role="img" aria-label="risadinha" style={{ marginLeft: '0.5rem', fontSize: '2.5rem' }}>😊💕</span>
            </h1>
            <style>{`
                @keyframes pulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                    100% { transform: scale(1); }
                }
            `}</style>
        </div>
    );
}

export default Home;