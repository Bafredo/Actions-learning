export const projects = [
  {
    id: 1,
    title: "Soundscape — Listen Together Music App",
    date: "10 September 2025",
    description:
      "A modern Android music player built with Jetpack Compose that supports synchronized 'listen together' sessions, high-quality streaming (HLS/Progressive), offline downloads, and smooth, animated UI transitions. Uses a robust foreground service + MediaPlayer/ExoPlayer singleton, live notification controls, and MediaSessionCompat for lockscreen integration.",
    image: "/images/soundscape.png",
    tags: [
      "Kotlin",
      "Jetpack Compose",
      "Coroutines",
      "Hilt",
      "ExoPlayer",
      "MediaSessionCompat",
      "Foreground Service",
      "WorkManager",
      "Room",
      "Retrofit",
      "WebSockets",
      "Firebase (Auth/Realtime)"
    ],
    link: "https://play.google.com/store/apps/details?id=com.soundscape",
  },
  {
    id: 2,
    title: "LCMAS — Local Climate Monitoring System",
    date: "23 Jan 2024",
    description:
      "A web-based climate monitoring and advisory platform with JWT-secured authentication, role-based dashboards for farmers, officers, and admins. Integrated SMS/email verification, live weather forecasts, and AI-driven farm advice.",
    image: "/images/lcmas.png",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "JWT", "WebSockets", "AI Integration"],
    link: "https://farmers-rvdb.onrender.com",
  },
];
