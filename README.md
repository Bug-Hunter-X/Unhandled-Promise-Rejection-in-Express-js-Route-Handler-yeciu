# Unhandled Promise Rejection in Express.js Route Handler

This repository demonstrates a subtle bug in an Express.js application where an unhandled promise rejection within a route handler can cause the server to hang.  The issue stems from not explicitly handling the `catch` block of a promise within the request handling function.  Express.js does not automatically handle these rejections.

## Bug Description

The `bug.js` file contains an Express.js server with a route that performs an asynchronous operation.  If this asynchronous operation fails (simulated by a random chance), the promise rejects.  However, there is no proper error handling in the `catch` block; therefore, the response is never sent, and the server hangs.

## Solution

The `bugSolution.js` file shows the corrected code. The solution involves properly handling the promise rejection within the `catch` block.  This includes sending an appropriate error response to the client and/or logging the error for debugging purposes. This prevents the server from hanging and provides better error handling.