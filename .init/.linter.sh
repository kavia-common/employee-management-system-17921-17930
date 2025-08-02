#!/bin/bash
cd /home/kavia/workspace/code-generation/employee-management-system-17921-17930/employee_tracking_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

