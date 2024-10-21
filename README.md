# EzyMetrics Backend

## Installation
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file with your MongoDB URI, Email, and Password for alerts.

## API Endpoints
- `GET /api/leads`: Fetch lead data.
- `GET /api/campaigns`: Fetch campaign data.
- `GET /report/csv`: Generate CSV report.
- `GET /report/pdf`: Generate PDF report.
- `POST /alerts`: Send alert email when conditions are met.
