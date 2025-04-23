import http from 'http';

const port = 7000;

// Set your maintenance end time (adjust as needed)
// const maintenanceEndTime = new Date();
// maintenanceEndTime.setHours(maintenanceEndTime.getHours() + 2); // 2 hours from now

// Change this line:
const maintenanceEndTime = new Date();
maintenanceEndTime.setMinutes(maintenanceEndTime.getMinutes() + 30); // 30 minutes from now

const server = http.createServer((req, res) => {
  res.statusCode = 503; // Service Unavailable
  res.setHeader('Content-Type', 'text/html');
  
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Maintenance Mode</title>
      <style>
        body {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          background-color: #f3f4f6;
          color: #111827;
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          text-align: center;
          line-height: 1.5;
        }
        .maintenance-card {
          background: white;
          padding: 2.5rem;
          border-radius: 12px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          max-width: 480px;
          width: 90%;
          margin: 2rem;
        }
        h1 {
          color: #dc2626;
          margin: 0 0 1rem 0;
          font-size: 1.875rem;
          font-weight: 700;
        }
        .icon {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          color: #dc2626;
        }
        p {
          margin: 0 0 1.5rem 0;
          color: #4b5563;
        }
        .countdown {
          font-size: 1.25rem;
          font-weight: 600;
          color: #dc2626;
          margin: 1.5rem 0;
          padding: 0.75rem;
          background-color: #fee2e2;
          border-radius: 8px;
        }
        .contact {
          margin-top: 2rem;
          font-size: 0.875rem;
          color: #6b7280;
        }
        .contact-numbers {
          margin-top: 0.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .contact-number {
          color: #2563eb;
          font-weight: 500;
        }
      </style>
    </head>
    <body>
      <div class="maintenance-card">
        <div class="icon">🚧</div>
        <h1>Site Maintenance in Progress</h1>
        <p>We're performing scheduled maintenance to improve your experience.</p>
        
        <div class="countdown" id="countdown">
          Estimated completion in: <span id="timer">calculating...</span>
        </div>
        
        <p>We apologize for any inconvenience and appreciate your patience.</p>
        <div class="contact">
          For urgent matters, please contact Automation:
          <div class="contact-numbers">
            <div class="contact-number">🤙09657456377 ‎ ‎  🤙09657456378</div>
            <div class="contact-number">🤙09649337979 ‎ ‎ 🤙09176327042</div>
          </div>
        </div>
      </div>

      <script>
        const endTime = new Date(${maintenanceEndTime.getTime()});
        
        function updateCountdown() {
          const now = new Date();
          const distance = endTime - now;
          
          if (distance < 0) {
            document.getElementById('timer').textContent = "Maintenance complete! Reloading soon...";
            return;
          }
          
          const hours = Math.floor(distance / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);
          
          document.getElementById('timer').textContent = 
            \`\${hours}h \${minutes}m \${seconds}s\`;
        }
        
        updateCountdown();
        setInterval(updateCountdown, 1000);
      </script>
    </body>
    </html>
  `);
});

server.listen(port, () => {
  console.log(`Maintenance page running at http://localhost:${port}/`);
  console.log('Press Ctrl+C to stop the server');
});