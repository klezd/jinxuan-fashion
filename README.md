# The JinXuan Fashion

- A web application written by React and using Firebase functions
- All data comes from the FakeStore API
- [App runs here](https://jinxuanfashion-2021.web.app/)

---

### What its can do ?

- View and add items to cart
- Edit cart easily on cart interface
- Get Authenticated with Facebook / Google or Email and Password

---

### Future Development

- Process to Pay with user information (address / phone / etc.)
- Integrate with Stripe for payment
- Implement PWA

---

### For local run

1. Clone this repository
2. Create a project on [Firebase console](https://console.firebase.google.com/), enable Login methods: Email, Google and Facebook (if using)
3. Create a web application and follow the step
4. Back to repository and create an .env file on root with filling variables

```
REACT_APP_API_KEY=
REACT_APP_AUTH_DOMAIN=
REACT_APP_MESSAGING_SENDER_ID=
REACT_APP_STORAGE_BUCKET=
REACT_APP_PROJECT_ID=
REACT_APP_APP_ID=
REACT_APP_DATABASE_URL=
```

5. Get started with running command in terminal : `npm start`
