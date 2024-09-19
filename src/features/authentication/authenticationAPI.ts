// A mock function to mimic making an async request for data
export function fetchAuthentication(authenticated = false) {
    const waitingPeriod = Math.random() * 3000;
    return new Promise<{ data: boolean }>((resolve) =>
      setTimeout(() => {
        authenticated = true;
        resolve({ data: authenticated })
      }, waitingPeriod)
    );
}