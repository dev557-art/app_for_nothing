importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyDVxfUM4AWZ9O-qM9hN1GG9pOYJoht5aWw",
    authDomain: "signal-app-b8e7d.firebaseapp.com",
    projectId: "signal-app-b8e7d",
    storageBucket: "signal-app-b8e7d.firebasestorage.app",
    messagingSenderId: "557798528846",
    appId: "1:557798528846:web:e94dc2dda318a01437b01f",
    measurementId: "G-G1B5DPC2DW"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: '/icon.png'
  });
});