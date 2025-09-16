#!/bin/bash
cd /home/kavia/workspace/code-generation/reservation-management-system-13410-13425/booking_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

