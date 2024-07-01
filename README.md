# insuredMine

This project is a Node.js application that provides APIs for managing insurance-related operations. It includes features like bulk upload of CSV data using worker threads, searching for policies by username, providing aggregated policy information for each user, tracking real-time CPU utilization, and scheduling messages to be inserted into the database at specified dates and times.

## API's 
    Bulk upload of CSV/XLSX data into MongoDB using worker threads
    Search for policy information by username
    Provide aggregated policy information for each user
    Track real-time CPU utilization of the server and restart the server if usage exceeds 70%
    Schedule messages to be inserted into the database at specific dates and times using Agenda schedulers
    
## Working feature video (https://www.awesomescreenshot.com/video/29145421?key=ad1d6890be3f5742a38af30b9be001f6)

## Installation

  1.  Clone the repository: git clone https://github.com/yourusername/insurance-api.git

2. Navigate to the project directory: cd insuredMine

3. Install the dependencies:npm i

4. start the


## API Endpoints

**Upload CSV/XLSX Data**
    Endpoint: /api/upload-file-data
    Method: POST
    Description: Upload CSV/XLSX data into MongoDB using worker threads.
    Request Body: Form-data with a file field containing the CSV/XLSX file.

**Search Policy by Username**
    Endpoint: /api/policyInfo
    Method: GET
    Description: Search for policy information by username.
    Query Parameters:
        username (required): The username to search policies for.

**Get Aggregated Policy Information**
    Endpoint: /api/policyInfo
    Method: GET
    Description: Get aggregated policy information for each user.
    Query Parameters:
        username (optional): The username to get aggregated policy information for. If not provided, returns aggregated information for all users.

**Schedule Message**
    Endpoint: /api/schedule-messages
    Method: POST
    Description: Schedule a message to be inserted into the database at a specified date and time.
    Request Body:
        message (required): The message to be inserted.
        date (required): The date and time to insert the message 
        time (required)

Monitoring CPU Utilization

The server tracks real-time CPU utilization and will automatically restart if the usage exceeds 70%. This is configured in the server.js file.
