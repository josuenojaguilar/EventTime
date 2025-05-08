import { useEffect } from 'react'

export const useEventNotifications = (events) => {
  useEffect(() => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission()
    }

    const checkTodayEvents = () => {
      const today = new Date().toDateString()

      events.forEach(event => {
        const eventDate = new Date(event.date).toDateString()
        if (eventDate === today) {
          new Notification(`📅 Hoy: ${event.title}`, {
            body: event.description,
          })
        }
      })
    }

    checkTodayEvents()
    const interval = setInterval(checkTodayEvents, 60 * 60 * 1000)

    return () => clearInterval(interval)
  }, [events])
}
