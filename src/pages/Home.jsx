import React, { useState, useEffect, useRef } from 'react'
import { Row, Col, Card, Button, Typography, Carousel, Progress } from 'antd'
import { Link } from 'react-router-dom'
import { 
  CalendarOutlined,
  ArrowRightOutlined,
  PhoneOutlined,
  CheckCircleOutlined,
  StarFilled,
  HeartFilled,
  SafetyCertificateFilled,
  TrophyFilled,
  TeamOutlined,
  MedicineBoxOutlined,
  SoundOutlined,
  ToolOutlined,
  BulbOutlined,
  BookOutlined,
  PlayCircleOutlined,
  ExperimentOutlined,
  RocketOutlined,
  SmileOutlined,
  ThunderboltOutlined,
  CustomerServiceOutlined,
  ReadOutlined,
  AudioOutlined
} from '@ant-design/icons'
import { products } from '../data/products'
import bannerImage from '../images.jpg'

const { Title, Paragraph } = Typography

// Custom hook for scroll-triggered animations
const useScrollAnimation = () => {
  const [visibleElements, setVisibleElements] = useState(new Set())
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, entry.target.dataset.animateId]))
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = document.querySelectorAll('[data-animate-id]')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return visibleElements
}

const Home = () => {
  const visibleElements = useScrollAnimation()
  const featuredProducts = products.slice(0, 4)

  const isVisible = (id) => visibleElements.has(id)

  // Animation styles
  const getSlideFromLeft = (delay = 0, isActive = false) => ({
    opacity: isActive ? 1 : 0,
    transform: isActive ? 'translateX(0)' : 'translateX(-60px)',
    transition: `all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
  })

  const getSlideFromRight = (delay = 0, isActive = false) => ({
    opacity: isActive ? 1 : 0,
    transform: isActive ? 'translateX(0)' : 'translateX(60px)',
    transition: `all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
  })

  const getSlideFromBottom = (delay = 0, isActive = false) => ({
    opacity: isActive ? 1 : 0,
    transform: isActive ? 'translateY(0)' : 'translateY(40px)',
    transition: `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
  })

  const getScaleIn = (delay = 0, isActive = false) => ({
    opacity: isActive ? 1 : 0,
    transform: isActive ? 'scale(1)' : 'scale(0.9)',
    transition: `all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
  })

  const heroSlides = [
    {
      title: "LIVE WELL REHABILITATION NETWORK",
      subtitle: "INDIA'S NO 1 Integrated Autism Network",
      description: "Mainstream your kid with inclusion, equality, equity",
      gradient: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,174,239,0.5) 50%, rgba(0,166,81,0.6) 100%)",
      image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1920&h=1080&fit=crop&q=90",
    },
    {
      title: "Watch Your Kids Training Live",
      subtitle: "Get Trained by All Necessary Skills",
      description: "Make your kid normalize best way plausible",
      gradient: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(247,148,29,0.5) 50%, rgba(227,30,36,0.6) 100%)",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1920&h=1080&fit=crop",
    },
    {
      title: "Taking Pediatric Therapy to the Next Level",
      subtitle: "Expert Therapists & Special Educators",
      description: "Comprehensive care for autism, ADHD, and developmental disorders",
      gradient: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(102,45,145,0.5) 50%, rgba(0,174,239,0.6) 100%)",
      image: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=1920&h=1080&fit=crop",
    },
  ]

  const services = [
    { name: 'Autism Therapy', icon: <HeartFilled />, color: '#e31e24', image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=300&h=200&fit=crop' },
    { name: 'Speech Therapy', icon: <AudioOutlined />, color: '#f7941d', image: 'data:image/jpeg;base64,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' },
    { name: 'Occupational Therapy', icon: <ToolOutlined />, color: '#00a651', image: 'https://media.istockphoto.com/id/1402700273/photo/schoolboy-playing-with-building-blocks-in-the-classroom.jpg?s=612x612&w=0&k=20&c=ytMz74BvWY31nu6FAsFChKN7vS7UygwUSj5MKyOY3Hg=' },
    { name: 'Behavior Therapy', icon: <BulbOutlined />, color: '#00aeef', image: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=300&h=200&fit=crop' },
    { name: 'Special Education', icon: <ReadOutlined />, color: '#662d91', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=300&h=200&fit=crop' },
    { name: 'Play Therapy', icon: <PlayCircleOutlined />, color: '#92278f', image: 'https://images.unsplash.com/photo-1587616211892-f743fcca64f9?w=300&h=200&fit=crop' },
  ]

  const stats = [
    { name: 'Autism Therapy', rate: 98, color: '#00aeef' },
    { name: 'Speech Therapy', rate: 98, color: '#f7941d' },
    { name: 'Special Education', rate: 99, color: '#00a651' },
    { name: 'Behavior Therapy', rate: 98, color: '#662d91' },
    { name: 'Occupational Therapy', rate: 98, color: '#e31e24' },
    { name: 'Physiotherapy', rate: 99, color: '#ec008c' },
  ]

  const testimonials = [
    {
      name: 'Priya Sharma',
      child: 'Aarav, 6 years',
      service: 'Autism Therapy',
      testimonial: 'Live Well has transformed our lives. Aarav has made incredible progress in just 6 months!',
      rating: 5,
      color: '#00aeef',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
    {
      name: 'Rajesh Kumar',
      child: 'Ananya, 5 years',
      service: 'Speech Therapy',
      testimonial: "Ananya's speech has improved dramatically. The personalized approach is amazing!",
      rating: 5,
      color: '#f7941d',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    },
    {
      name: 'Sunita Patel',
      child: 'Rohan, 7 years',
      service: 'Occupational Therapy',
      testimonial: 'The team is professional and caring. Rohan has developed so many skills!',
      rating: 5,
      color: '#00a651',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    },
    {
      name: 'Amit Verma',
      child: 'Isha, 4 years',
      service: 'Special Education',
      testimonial: "Isha loves going to therapy! The activities are engaging and she's learning so much.",
      rating: 5,
      color: '#662d91',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    },
  ]

  const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=400&h=300&fit=crop', title: 'Autism Therapy Session' },
    { src: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=400&h=300&fit=crop', title: 'Speech & Language Therapy' },
    { src: 'https://images.unsplash.com/photo-1587616211892-f743fcca64f9?w=400&h=300&fit=crop', title: 'Play-Based Learning' },
    { src: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExIWFhUXFxcWGBcYGBcXFxUVGBgWFhUWFRcYHSggGB0lGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0mICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBEQACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAFBgMEAQIHAP/EAEIQAAEDAgQDBQYEBAMHBQAAAAECAxEABAUSITEGQVETImFxgTJCkaGx0QcUUsEjcuHwYoKSFSQzQ1Oy8RYXosLS/8QAGwEAAQUBAQAAAAAAAAAAAAAAAgABAwQFBgf/xAA1EQACAgEDAwIDBgYCAwEAAAAAAQIRAwQSIQUxQRNRIjJxBhRhgZGxIzOhwdHhUvAVQoIW/9oADAMBAAIRAxEAPwAS6xloRGG4phEoTSEZKaQj2WkIyBSEbAUhGwFIRsBSEZprEbClYjR9zKkq6CfPwpmx0rFS4vMy8yiZJ1g5R5DmRrQpMkvgJWrDio7MpI5pVJ/8Hxp6XkemRv4S8Dmy+fPwhXIiD0pqiPTLeGXYZWhpaf4ZMuGYUAYAyzz+tC77oZx8HQsb4OLTZeacDiAMxnQ5YmR10qR8EIqGkI0UKQjVSaQiq/bg6jQ0E4KSJITcSk+idFb1UljcS3HIpF7CsXU13F6o68xShkce4pwTGhp1KgFJMg1cjK0V3GjfLRAmMtIR7JSER3EpSVHQCmY6VgJ/HGx71R+pENQZRex9PKTQPLEL02U3cZcOyfjQvN7IL0/crOXzp3UBQvJJj7Uiq7dfqeFKsjFcEVlXbRIGYqJIHxp/SkN6sRnKUJOVLe0agSTp0pvTbXDE8qi+xE2+oqIAV7KjsBsOm9BHG0+Zp/ggvVlLtBpe4mLxB0+9HlV1Y4orb5ECn1/rV8aLavYHe/c6u/byKkRGQt28bintDGibUlWlMxzW5GQwaAdEYVSEbCkI3AphUbBNIVErTKlGEgk9AJPwFKxUS3FktEFSSJ6gj60rEVyKQwOx1UNg5oGbvawdpT6b+sUDlzRKoPbuF/DbRx8/w0kawVSFAj5UpSoPHFs6dgGBIbAJEq5nrUDk2WVGhoFokjYU+0HcAOJcAaW2pQQM6e8DzkeNMpOLHlBSBLXFL7tshgrISlIbUOagBAk77aVPFWUpqmUJowDHjSHME0hUaKFIRC6xNC1Y6dFJ5kga6iq88XsWceXwz1jfrZUCnVJ3H2qGM3Bk8oqSOgWzYUkK6iavR5RTZOGR0ohjcIHSkIGcSp/3dflUeT5Q8fzCdh3Cl1cIK7doKSnQlSgkT0E7mq2OFqyec0nQr3bryFKQQEqSSkjoQYIo1GIuSm4tw7qNSLagWmyuq3UfePqaLekA8TZEu1KdxRqaZFLHKJcwm3l1vuz308vEUpvhjRXJ3HhrH7S3bWlbX8QkgkIzFY5CelQRyRiuQ5Qk5cFXiDHEXOUNsFOWYUQE7iIAH96VHKcZu14JccZx7+Tl6uFHSTtuaneZEfosh/2AOa9fKh9f8AvQ/E6QlNWiqSBFIRsG6QhexpX8UjoKFhJFVJphUSoVSFROlVIQ08LX1olJQ+gZifaKcwI6eFIQwN4nZWyi61lJIylKYmPAU3YRfPF1mpJzE6+6UE/tFO5LyhHOsUWhTq1NpyoJJSOg/bypl2GBuNWPbIQ3IKZHLWeetQbqky6oJ41QcZtUW7IypASkeQA6mKjbbZKkoqjNnxWylSQtSYVspBKh6iJHwiiSoZjbb3aFAFKgQdiNqLcuwO0xc7HoajkEjmTKgC4BsHXEj/Kop/Y1Yxvgp5fmMO3aRuaNugFFvsVHMWQOc0DyRDWGRUdx5I2FA8qJFp2SWmLKUCYoozsTwpEi7tZ509i2oiUonc0w9HkI0H8w+tVsvcmg+Dots8kJSmRMbVcj2KsiyldECSJNIYHcSj/d11Hl+VkmP5hNt8ZumElNu+W0q9oQkzynvAwfKqkMlLuTyxqTtgJWGlRJK5JJJO5JOpJp/U9gtpYZwAn3Vn0NPuk/A3A18O2RaSQWEpAElShqaGUpIVJlG+xG0KiVJk+VN8QX4Ff/AGzbp9hofKip+4PBA/xQeSAKah7B9xxO71AokgbKlrxM4HElSpTsR4UWxg7jo2G3TZbB7NKgdQfA08Z0qoTjZol5PIz5axVmWaC8leOGcvBIHh4/Ch9eDC+7zC2EvMgntUyDsY0FPvUuzBeKUe6F7jQ2RlTKj2sgZRMeoOlBudjqPAqt3PUUakhtpabfFFY1FhDopDEqXBSFRIl2lY1EhepCMB8UrFRNauZnMoHs7mdM2mkeUVVnK22W8SpUN2EAKTlPkaGPcnl2AuKcENdp2qJTHupMI8Dl2H1qWTdUyOKV2XrthTFvLIzKnQcvGo6D3CzhXEV0orSsqTlSVQpogae6VGI+dE4+GA5KtwDUyoCMxO5J6kmST5kk1Yop3bNEWefQ0MkHFhB3g49l2iTPPL4VXlFeCxHI0+SLjK8w9bLaLW2U28kjOSkJ0jUKIJzmedPKNLgbHJ3ywRhg7tFDsFNqy6BRkZG+8lAlRj9/KnSsZtIGP4wdk6dOtF6Su2RvK+yBr+KLKtXFHyJ386NRA3FvCeJX2VpUXFKAVqkmZGxGvUUmhrG7BPxBzOBDyAmSACk6CdBM8vGmfA4/3Fsl1GVWxppR3Kh06ZXawFhOzY+FAscV4C9R+5abs207IHwp9qG3NkkAchTNpCQtcW4rkRlB3+lVm7lZaxw8HO7/AA19cONoJB6VLCDlzQWTG4dwW8l1ByrSpJ8adwruQqV9iBS1U1IXJGppZ1jx9KJUNTKqpqSkAHcL4hcbbyBWk86hlDkJM6Hh0AcxUDLaLSrlKRqpSepI0+1INI2cuHEiYStHJSYBHmNjQTnsVvsOopujNxw63dJLwUW1BJJhEJVGxVtqeoqtqepQx04NS915RFPByKeGYc688WEIJWkkECNMpg6nTetHHkjkScezKslRZxHCVsqyLSUqHI/0qVgp2UlNq5UVjUgScVUkkKB3oNzsW1F22xQEiDvRJ2C0XBfAk0QJbt7kCVHZIn7U0uw8e4O4UxfM+pOadyeYlShr+3pUcsbjHknxTTkPF9dlhPaAkI95QBVlGmpA5a+lQxV8FtkzuMZUh3OpxuNVJg5D1UkcvnT0KgyMTaytkEKSogE9J2n109adsHa7B/FdwgNBtO6jy6DX7UUO9kGZ1GhTFtNT2VKJGrfKZoWEpUMtjepyFM8qjcWSKaYn41haSsqqWPYGTBrVuE6CipA7mZu1htBWrYfM7AfGm2jqbFd98uKKleg+wqVKgG2yFSZ0Hqf2FOMVVMGaawqN0sz6UNj0Z7KNen9/1pCOu/hziynWChRlTcAfykd2fmPShExtKqTYkaLXUMssV5DUWUrp0gGKp5dZij3kTQxsUcQwG6uFZkxAM6zrVT/yeBS2luEY38XYJ4PhrtsmXE6k6xqkVtaLLjavd3A6lOOSo4+yFPjV4KcSAPE1JqnykUMCaXIsut+FVkTlxDJzrHLJAofVSVEzxrltgV5gzU6ZVogLRorGOxOBRBS0kKPMqMAeo+kVWjFy4RblKONXItotFobJUpKzEqGWEn5/Wiy4tkHLvRHDUqU6rg3wfDkugqbWE6+zIUkj0OlYWbWxwSWzlPvF2q/MvNryNhZCGcpiNBptBUJj4msvU5fUcppVZH3ZzjA8T7J1TrMpdUpeYkSClSirnoeVdZpo7YRXskv6Gfk5ZNi9yp1edZzKO50HyFWmClRDZM70hM1VhCTJUBSSGtFVqztG3AsqGm8AqHyqeOmm3dEUs0O1gjEUMBZUHTBJPsqj10pfdcjYvvEEuQXid3KciFkp1k7T/TSrenwbE3LuVs+bc0o9iThWy7NKle8oA+USQBWXkybmaeOG1HUcCuRcNRPeAhQ+VQpU7RZUiT8i0nRbcK2BGZBjpnQDmT4KGmupqT4WGovvF/kVn7ZLaSp51XZlXcbJECBokaBSjoTr8qCm3UUBOairbBb152pJiI0A6CpttIoSnudkINOmCGuGrZp5zK87kEaagSeknSk2NQX4iwG3ZbLjT8qEQkqSc0mNI1/8U1q+GOhUUZ3ohWV3LbmKdCFbjVSgGk8iVH1AAH1NEmJIE2NitWkcooXmSJY4Wxnw7h4kpBGnOonqPYnWn8ss4hwuUoSuN1a+RmB8qUcliljBz+BFAUDvr61LGVkUoNANTGpB2n5UZEPv4Wp1fjo2P+6h8ifYenjpVTXSccEmvYPCrkVVK5k1xHqTl5ZpKKIm3kq2INJwce44awYd00MPmYMi24AoEb1a0+SW9bGA1xycxvOF7xy4U6lCMsmMxO06aAV2045JpPzSKUJwi6YQxbhG5ebQkdmkiMxg/Ko8WHLfxNEk82OvhBzH4dXHaFan0QRAEHTbx8Ks+jFLsV/U+Jv3MK/DEknNc/AD70lhF6hj/wBr2ud0r/4/ai9Mb1BltU/xA0kACAfKSRt6VR1Gs9HJHHGN2XdNovXxSyyl5oLJw9xJkBJI2B2PSaDUSWfE8ck1ftT/AMChptktylf9P8mbZlXalSmmkKIIJGxBidY5eNYr6XubvLV+GnSLNVHiLf0oHvYnaJeca74XECFL7JJgkGM2WB1jpUcNBklOm04+GuV+tJjV47P2fcXrezWmW0JaWlRAzgiUmYnXYetdFue7gi9KMYNS7lzGsFctyntMvemMpJ2jeQOtWGihYQwDh7tW+07UJEkREkR11EU6E2IPEGLJW+4y25maTAQoadoQYUoeGYb9K1NPiUYq+7KGXI5N12ALjmvOJA+M/wBKt+Cs+5hx0wSTtyoWlQlJld5Gw8I9Y1+dJLgdvkbMJtoQ0Y0UkVzuWO2bX4m/iluimXbJ5y2ezoEg6KT1H3qInHBjHC4gktmR+qN+g1p7F2OY3N86/crW8r2FKShOyUAaQkem+9a2kxVC2u5k6nJc6vsXLG7UFERI2PX4VDk0s48rlDxzRfDLgvkzE1VJqJ27kUkNROo7eNOMZBpDEqTRIQu8YNR2Lh9hClZvNSe78xHrSatMPG6ZtgF6ySIJnoQQfnVKcWu5oQmn2G/86ltIUElXkNfSgUbDkzDHEOc5TZulP6jkA8/an5VKkl5I22/AXubRFy0YSUyI1TBSabc4ux6TVHMsbwwoWW47yY21nSRtVzHLdGynkjtlQ4fh7hymkOqWkpKsmh6CSD8zTxafKZHki13Gl/as/qnGmkSaf50VbtuWlAbwa4rHKsiNMVuFrR1LrilSEzoDWtrskJY4qPcrwjLe2zoOEjuGsqHLZNPujW0CkpWT40+nm4zUl4FNJ8HPbvi15KlAORCiNhyNd9DLLavoZzxKyi7xc/8A9U/L7UXqMb00UnuJ3j/zl/Gl6jF6aB1xxA6d3V/6j96W5i2oHuY0ufbV/qNPbFSOvWDgDzizsnT4D71z09Us2X1qpUdBpsDhplD3bGBbXatBRUoCJABjymKgx9RcpfFFONqPn37/AFKWTfGTjB0/++5BalYaVnVMAgTvEmJ9Iq/ke2E2nx2RPHlwtc+fqIWOWhV2hSTKiZ13gRt0gVPpIVhiNqJr1GWLe9eSy2XrZOXKBnTAOTkTH961Y5pWRySbZZu7wvEKKlK00zEkgetWY21yZORRjKogriS57K2UR7S+4PXf5T8at6bHun9Ctnntj9eDnhVlhaTIBmOgUe8PQxWi+FZSjy9rLrgkL8pHwqUB9zRaiUT1E/cU3gXZkTl+GiJQpXM6xlE/M840FQTyuPZEsMSfc6Pwowl1lJSoKCVEg9UqMjTlBJHmDWVrF/E3LszV0j+Da+6GL/ZYkGqjLRjFVJYZW6rZCSQOqohPziixY3OSigMs1GLbOU24Oit5zmfEk610kUoqkc+5N8s2fd5g7x/q2P7U4rMhIVGYkH9Q3H9Kq59NHIvxLGLM4/QIXeEXLLQeBztnUK5H19DWRKEoumXlJSCTKypCD1SDRS4oBeS0hNMOWmWCRIpxiK/ZBbUFDkd+o1FKXysKHzIV+zuff7MJGxAObw1mPlVWXp7eO5fSybrfY6dbWQVZpEd7KDPj41FFqg5XuF7AcNvEryuXCSmdg2JjnqTpUjyY6pIZY53bfA9oZCUxQS4Q65YuXeHALU8MvaKUAgrEpTlHMabwoTyp972qISgnJtl/BmYQpeXKHVdoE/plKcwj+aasaWL2tvyVdbJblH2RPcVW6pCU9O1FckenaUiv2wFcj9zzf8WX98fcg/ONj3hQPDkT5Q++PuHMGuElGhFPCEot2gZNMtXBBSrXlUsIW6Bs4rc2YKlHqo/WuvgvhRCyBdmnpRpAlZxhI5USBKVylI5UQIOcGuiSfIGiGO326Rrp7W/jXCSySSpM11mmkkn2GSyH8IA7EnTlAqJOoX+P7UQNvdYm8Q8TKYdcZS0FJBSN1A6pBPUe9XQaTFLPpE2+/wDZtE0dUou5+PN/6KzKwUnWCdTPj+1auOO2Kj7Ecpqbcl5A2JYypg5UuZpJ03TrrPhvtRqDYGTLGMa8m2DPEpEmami+TOkCeOMQgoa6d8xyB0H9+FaekTXxFHUfF8IrONAgqSdwfI+BFXWk1aKybTqQRZIUEz+ka+fI06/AZ96ZHa6JI5gkgfGkrEaPshUmN9f6U9J8AqTXJa4QvDb3KFF9SG0q1RJyrzKCFCNhooK1/Sap5cXwuK8l3Dl+JSZ2wuAHMTpWKzXTEPjTitlRUxDioHuAQkmNSSRO233rU0uGUFurlmZqcqm6vgT7h9RILRLYA9kgEKnUgp2+HjV9xfeykmlaojaeUoHMlPoFDWdxJPjTpNDNp9jJc28T8qca6GnCHHHLS5YCxlSjtsp5e6Y6daztbFUpFzTvwXENwEDogVUyLkmj2LCEUA7DOGt92nYipiTBIWI3SY+BpPlDxdSTF28WezQQJ206xrFZvk2HQ/YXdlaAkNgAJAMqhSVQCAUwQRB3BokuKQEq7s0w57XvCFAwaZcMN8rgJv3EinlKwVGirZpW4T3AEg6LmSZ9oAR1mpsenc+fBDk1EcdryXy3AgbVfUVFUjOlJydsquppmhkwfdIqNpBpnP27cruld4xO0mo444PJyjnOpavJCTUWMOJsKZShSFKA2ME79aDLjg5U0jb6TklLDcmSNXy+xXmcV7HXrUMdPj70jT3tMB4d2bpjNBqOWTMpVGHAdRrllS7KQopBmKmwzlONyVASVdgdcrFTgA0pK1BCRKlGAPGkCdSwDhlpllKFpCle0o+J3phBa1QnMvprFcFNukaKDtro2geE0pP4F+f7/wCgH8zEC57Jx64KwlRzqjWNUnKNt9q6XQfDgSft/s23ocWXBCM4JppXx+ZRukBwyomdtDHQbbchVr1pvuwcfQ9HiTWKLjfem/72DL/AkuRC4I6ifoRUkNS490Q5Ohxfyzf5q/8ABdsLMtwJBA86KGojfJUydFzpfC0/6C9jVhcKfWsNFSCdNlaAQDA15VtafW4FFRcl/VGLqOka1Nv03+VP9mUENjaPPTn41oppmQ4tOn3I7XRCY8QPEAkUo12FK7sjWrKsEc4B+NECi2pMajbmKQ5VcaGYg84UNtfdUNf8tC+467DnfcSL/KMsNn+IWxmUeSQI0jSTH1qjHSL1nJ9vBdnqn6Siu4otDMok6iZ860DPXLN16q8vrSH8m5jy9PhFDyHwRkpEKP8AelM7FwTYY8olwR7TZEeEg/tVXVr+ES4H/E/IeUp28hWdPuW49iwlFCggjZKgUhG1ygxPKiSBFniXCFtoSQSkOatqGoBOqk68xuPA+FVMkNk7rhmjgy+pGvKL3D9i8QJuVpGUd5J1kTuDKTvtHIU6lD2LMtu3u3+n+AzZ2ikOKUpxTgIGpCQSeeiQBUE2m+Bo9i26+NuZ+VCkO2F7RaQhKQoExMSJk6n61r441BIx8krm2ZUuiBIHRTMRQuRofKgaHsRcMH+8L/mqLH/MOQ6q7m/qNLqQsKbVt9Kjy9zpei/yDQYU2Wi2SYIifCo1I16KWH8KsMkKQtcg8yT6VZyap5MXptKiOONKW7yXsRwZh5QUdDEaaVn6fBHCmosmlJyKznDbBGpJI51Z3AbTGD8O27DvaiSrlOseVKxtowkzRDFG2B1nkYrhp14NFoZFGEp8AKr5b+FL2X9SNeTjFoG7h8Kz55WtS0woZNcwBUQMxInbavQfuktPsx5Pb9kc91PqU0o+jJr8U6NgCn2SQPMn61FKEX4NLp+v1awRbyNtry7/AHKbuLupXlCgR0Ip46eDVs049Y1Ue7T+q/xQzYVbPvAlCQqBJ0jl1mmjpItXZax9cnfxxX9f9m7zLySlBaJUUlRymcvnpS02h9dupJV7jT+0kMaW7FL8qf8AgTcQYW0socGVW5HPvaxXS4WnjW3suP0OO1MnLNKT7tt/q7KYQpvM04hXdUVgpMgBWvs9agxZFK2u1k2XDKFJ+xKbJwp7XIvswvIVx3c0bZtp+9WfhurKrbrsTNtKMbwf8O/XX0pV7MSa9jRy17RQDYkkkJG8mYCRO8kCnfuMiS8tltS2tJS4JQRzTBkggfzfOlBp8oaXHBAEQkRzPwpOXNDqNojUuNPHx+1LcLazcd4wDJMCP79aZyQtrKrpKlBPLSfPel5FfATwFErV/I4T6JMfWodT/LDwfOODAkiTA0rKl3L8exKtcK30oLocnYuACY2p7ETi6znKnU/IeJoou+BqLmJOZrXsYK1CNANEncHNy+tHLEpKhQk4SsCYZxS21/CKVSiULTl56GR8aoTwSg+TThmjNcBE4yXNEJyJ6n2vQcqholsl/MJSnmVHTqpR5AfanpvsM3QzcJYIpKe3fA7RQISmP+G2dIJ5qI58gY6k7OJSUEp9zIzSTk9vYQMeursXmT+IjIrKFZVBtaZ0WVRERTc7qoVRq7D2H3jybjsnFJWCnNKRAFNNOEqfkKO2cNy8BO8IynyNDIARMI/4yj/iP1qDF87OM6nL439RmxR7s2jHtK1+1RZOZHX9Kjt06EdeN3IJhelBtNKzH/qC5/V8qamKzRfEVz+r5UqFZCrie6Hvj4UVCstYFxc4Hkh4goVpP6SdjT0NZ0pKZAI2NOMYtSCmOZVXBZLu/wADRfcKYsvK04R7qFfJJo8MYy1WOMnxuim/wtJkLTcXtVvx9Tj3DGGuNdqVIUNFRIOsgJEddzXomu1mDJqG4TTSXucjr9Bq3V4pdvZ/2LOQ5RII8xVfLFQm42nXsbeCEo4opprhd0CmrALcKiSIIoo1Qb7jdwJxEsrNuhAKFqPe5hI0/vzqDqOdaTBv8kuGG/karziJlp9aCmVBA/fSafpeR6zH6lUirqdRHDlWL/2Yi4fkv8TW8QQ2khWXQ7AAA+omtDVapaTTRUu7H02keozya7R/cs/iaGmkNqQBmdd1PPKEmPmBTdOncvwom6hiyQx1ITxduBvsws5CoKyyYzAQDExtGsTWvtV2YjkzZI5yZGsyrkKekK2iKxX7SZghQIPnqPpSfsJLgs3ZJg5iomSSdSZO5J8qSHbN7txIDfZhJGROeQZLmueNdtqFJ8j3wetUsKQ72hWlwBJaAKcoM97NOqhG0a/KmblaoXFWV0OJHInnJ2012ouRrXgGodkqV8PEbbelJDT4pBjAXQkr01UlSfiRrVfV/wAsl0/zjuw0CBPSsqTLyMrZ0gUw5Alo6CJNKhByxtkNskqIA3UomBJ6k8ogVZjFRjyClKUqj3DOC2JbzHOlSFwcsaAwdQobzP0ooypcCnB3TIVcNWpcW6Wk51kKUZMEgATEwNANqGUVN20PGbiqTLreFMDZtHwpvRj7BPNP3LDNg0DIQmeRgSOWh5Uago9kA5ylw2EW5iJMedHYFEZbjafiafcxlFFYYYypWYpCVxGYCPj19aF1IJWgLj1qtkEK1BBhQ2Ph4HwqDImh/AjYEO+r+Y/WoMHzM4nqLuf5/wBwjxA7mUEDp8qhfdnb9O/kICOW4pF4gXb0hFV5nwpxgbctU9DA14U9CGzAeOuxZDbkkp0B6p5Uto1nSMPb7yPEzXBTd8GhLyW+InIt3fKNN9TFBg+LOvqSadpZIt+BYwPF21yEZ1EGDlbcMEciQmBWw8UsTudL81/k0HqsOW9klx3PY24VIIhWp3KVCBM86n6fj3ajd458or63NBYHFO26/cSr1/sgskxPdT1Uo6CPr6V0eLHumkc9OVIYvwvsspW4RohIT+5rB+02a9uNeeS9p47YAU3BuHX158vaLUEqPJIOVJ+A+ddD0/T+hpoY+3Cv9znM2Tdr770MvA2EKYbcK8pUpUBSTIKRsR89Kzuq5HqNXHEuyOs6Vh9PAn5k7YmcbNXFzdFLbLikoGVJynKToVHMdI2HpWxppY4RbbRV6tOeTKscVxFf1fcHWNjcFJP5d4xuezXpHpWjHUY/+S/UwZafJdqLJm3JHy+YH71OVyJtGpPiJ9B106imfcePY8+Dm9rZKR65Qf3NJDPuZ7UCAd4H0pkF2MKcmnGBuIXJ0bGsxm/l6etRZJ8qKJcceNxMhaY0FSWRNchPCAVOJAGp09ZFV9W0sTbJtNFyyUjo9taqyuToptSUFPUnLGv+cViSzqzXjpZVy+TVlkqU4n/pwFEbZiJj4EfGnWVyaSQvutRbkww12PYwiASIJ97xmtBQS7FKwHjuMltDbTOVTjiwmFDMI5kj1FV9Rk2xpeTT6ZpVlyOUuyG+xYyNoQNkpCfgIqTGtsUinnn6mSU/dlkN1MmQUTJEU9jE9tvTsQUZSIFA2IoYioAGKQ6BhuYSSTNBJ7VZJGO50jGNYghbS2lJObKDOkTuPpUGXPHbtok+6yq74ObYJ7Sj/iP1qPT92cB1F/xPzKi8QUbpYIBGkTVHVZHj7HfdFgsmli2F+IH2mmUEIGZQ1qOGqcqVdzR+7rnkXlXYiTVpulZAlboO4TgzL8DtSkkTt/SooanG3VhywzSsBcU2SLc5UrzelS480Mje3wBPHKCW4W2UocTJkGnnNxdCWO1ZXvLJCFQSdgfjRRyNoF4zvWHuSU/4RXATVWy8z2PXBQ0SI9ROgBJ09KbSwUslMKPHcUeBMbZDYZKiHVLWsjKqCD0IEbAVs9T0WaU3kiril7rwZvTtRjcNl/E23+rHRy7leVO0dPvWl0Xp+DNg35Ipuw9VlnCVJmr+CtO6rbST1jUeR5V0sMUYR2xVIoSnKTtkuHYA00hTaEkBW+vWqWp6Xg1GRZMi5X4ky1M1Ginb8D2zcZEEACIkxV+XxcMpxxRjk9Rdwnb4IhKcomBVGHT8UMjyLuzXj1PIopUuAPdYahgkpmBqQdd/OhzwUGkh8OSWRNsgcvmy4kNqEEcuv7GoZd+CeMXXJz7jrDizcdoEw273hAgZxGcec971rd0OZShtfdfsYWuwuGTd4YIsLlpIdzthaloKEKKlJ7NSjGcRvsNDVqVvsynF0uSum3LrmVpJWSSISMx0MTpy21p5SjFW3SGjCUnUeWMieBbpSM57NKgCQgnvE9NEwD6/CqT12NOufqXloMrjbq/YUNRObSCZnQiORG4NXLvsUq55BqiSor66eXpUPeW5FjhR2ss2tutxSUNypSjATpqfD4U2XLHFBzm6S8jQg5y2pcjZw5w1eoczLZWkASCYPekRsTWNreraSeFxjlTdo0dHpZQzKUl4Y63TzyVTk0dW0SNQZSEgjUAboTz51n48sMnyST+jNbajGKXZa9hBlwhR/SIIHejfmfSpo5Hje5dwZYvUjtb4K11dpTqkHVMGTurmYHKtTBKTgnLyZWeEFkcYdkDsBR2162TqllvN/nWSR/3J+FQS+PMl7GrjfoaCUl3lx+v+kdNYqxZjMlFGCeJogS3bMq0PWk2KggwrSOdMx9rBmKTBMaU6FQuXzhCkKTqZ9n9VV9SvhLuk+ZqijcYkCFhxBQozoRHwPOsyTuRbzLbjYtcPxz2nXynWrmn8nl+tp5ee1jS3g+HFRX2gznfv/tNFPT4cnzfudxpMksWJLH2NsU4atbgAF46CBBpo6PEuUWXq8nYEvfh60SIuVR00+1SPTRa7gLPJOw7hXDCWSCHZjTlVL/xi3btxZ+/OqaAvE/A7lwsqQ4NRzqTT6D0rp9wcurU6tdhet/w4uEJiUk+Zj6UeTTTk+4T1cPCBuI8AXylSMp0HOP2qWGGlTRA9QzqmHt5VHwFeb5ZWkagN4zWrsClIJUUrgDcmI/erPTUvV3Psmgcik8U9venQncH4W4LpKltqSAmJIIBMg/sa3+oarH93koyV1RjdK0mXHlcskWjoSdXT4RWp0KG3Rx/GyfWP+IGGa2SqWm6QieaER5RpDixibiVuLaVspMH1qhqXcjR0sfgEXDbQsv5I1QZ8IG3nImq7RcRd/FQZrEOJ1KFoX5Ayn/7Va0uRxyKihqse7G0zlWG4nkcQtSMwCgSOvTTqDBHlWnkm5Qa7WZuOChNN80dgwfGW15HUgfxEpbM7qVqZJ3ESdKxnaNqO2StB53TdUn9I+wpmOhI/FDD8zLTgSMwXl09ohQJHmJT/AHrV3RTqTi/Ypa6FxTXg57bcOvmTomdQJP7aVcXDZSdPwFeFbJ1u+YSse8og9RlVz51Q6vNrQ5Pov3RPoor7xF/X9juNgmvNVzM3JAbjC7ydkMpUSpUJAmdAP3rX6HGUss6QEpqKtgt4FSP4hGxASk7DnJ+3zrtNPokviyfoZ2fWt/DD9Rfs21KKWtVGco5kiYE1aZVXAR4QayuXJ3PaFufBJI/aqGDnJJmz1B7dPigvr/RHQLRUgeVWDKZaFGRmi6JDE1retFwAKleXYawOdB68H8KJ3p8kYb2uAs3btAaAClwwfvE/coOdicyELOdSD3Z/Y00JRhNA5sssuNxZzu8W+Mru/ZkzOx5GYrT6qsEcP4+DI+zz1080nJ/AlTv+3uyR3G+1aXnSSY6SK5e7ds6rUpRxNoCcPplPnVvBxFs8v1C3ZUvdla5s5WrzqNnoOmVYor8Cq7ZxTFgiU2sRC1DyURT8+4NI1/OXCdn3B/nV96JSl7jbY+xsMbvE7Pr9YP1FEpy9wfTj7Gx4svU/82fNI/aj9SXuD6cSM8fXo0zI/wBJ/wD1T+rIb0kdRt7jcnc1xD6TmaRpeoiG8QHFAzoAfn/4q7p+kuKe6X6DrPt7IwgBMa6Cny9Gk+YyHWovwRHFGkrJzDU10ejrDhjj9kUsunnOTlQftXwoAg1fspShXDLKX43p9w20utqB2pxqPObUhHNOI7l5N8OzblCjC1EwBAkADrv6VTzRV7maGnn2gvqzGI3pkuJt1rITEoSVZiJMCB6VE8UpPhEzzQiuWR4s6XMKcKkFLhaA7MpOYLIHdykToqjilidvwwJN5Y1Hm0I/AeHvJu2ErtVIAcU4XFNqSoQ2pISFn3ZIMdaq9X1mGWjmoSTbryvdEOn0uaGROcWl9GPfHlwtLzKUtOKGVXfQ2pYSSUiFZRodJ9KxehyhGGTfJLld2l4LeVtNcF5OIEWy1pQU5E++lQzKA6ESR4mtl5sdfDJP80S4cankjF+WKyuI3nB2askEj3Z160DySN5dN068P9SuXilUaGTEBMT4xJ1o8OtnB14/Eg1PQtNODmm1SJri5Futt5aFEJXtEHVKgYmrnUMX3rD6MJK5NeTmNAts5Sa7Rb/Ya8L43tVAe2PAp+1Ya+xnU09y2v8A+v8AQ0+r6Zd2/wBCJ7Fmby5YaTJTmKVHvIIkTpB8OdXtD0bV9Kf8fb8b8c9vxLWHLp9bp8s423BJrx3GI8JsnQPL5c0H9prb3syaZftcMbt5DSYncnVR9enhTWOc/wADa7Mvt8w6Z9SSPlVHTpqU0/c1ddLfjxS/AdrQ6DppViyhXBbBokR0aOKo0MaWeEoQsuo1UUxEyOpIqtHDGM9xZy6nNPEsUuyCbFu5l1gk767VK482inNNu0UHeHyl4PpJJAykTyjT50c1fKHSu0xdxlAQspKB3HAToe8DrEbc/lT67T7sazN3/Yt9M6mlKWkUKpcez832IcZeSGHFJaCAR4A7Vjtxvgs6q1hf0AXCrc5R/exqxjdY2zzrHjeTWQj+IRvMIUpRUCBVCWvxrsj0zD06e1Js9ZYGhSodWR0iixa2EnUuA8ugnGNx5Cbn4fpUJQ8fka0VCL7MzXui6khaxThV5tZSCFx0qll1UMU9ki7DSSnDfF/kLz5KCUq0I0I6VZjJSVorSi4un3Bl2+KewAO69rRDHZfzFUywSfmIEnap4QI5Nt0hO4hx9eYoQY6n7UTNzQ6KKjvmKdy8okEknxNJJlrJJKSSGTBOL3WUhB7yR46xU0ctdyrqOnwzO1wzrOBXiX2QsayJFWuGjm8+J4puLI1XC21abVTnllCRJHHGUS43ihI1FEtWvKA+7+zAd5h6lLUudzMETTrPF90F6TXZmraH5iER4kz8I/eqWXrGOGR4owk3+C4GWlyPm0l+f+P7kmJ4G9cMqb7gzc5Mj0jX41Yl6moglJbeb9/8Eulz/dM2+lLh/h/ZlS94dvAkEZSUlJBSSCQD3pB8PjNZOTpEoW18Sd2jb0/VtPO45FX15KtxfqSo5goEaazNZH3eS4cS8lia4a/obYhiINi9O5SoCd9YH1qLHjrVQpeStsitTHaIlknvp8xXRPsbCYRwxU3TM7doD8Nf2qlqXWGdexJqXWnn9A3+JhzWsog5VhSusZVDTrqaqfZz4dbHd54X6o5HJxin9GImFq09K9pxPg4HUIYuE7dSrhtQQpSQs5iASB3TEnlyrjvtlLfGGGPzNOl5fKOu+zjjDRZ23V0h8uLVG/YyQZHdEg9QTtXA4una9O0mvzr+5c+8RS4kLFwMTLoKA8lGcGVOpIyTzSVmdOUV02nxamNepJv8yfLm0Xp0krrwq5/Qs3LKmV9upJCSAlznAnurMdCYPgfCr1bZbv1M7G3lx+j57x+vlfn4/EabFctpoJS2yaI1G4otdpRLImC4FS5vAJE60suqhjXLJsGjnkdrsBcOaUhRVI1nQ+NYkNVsbkjqMqjOKiwi3eqQnLnVvvJmnWvlt2leWnhKW6l+ht/t8g6OkeE/epnqszVxYH3DG+8EVrvEQsyo5ifKq+XU6jItspcEmLQ44O4xpg3EihaCk7Gq23IuUyWelU4uMlwyPC0Ntp03FTxz5fT2MwF9m8ENQssFTRd/Op5mqvpSOjWKS7E7F011ofSmBKGQuNXaPdVHrT/xIdrRDLFLyiQOA86id3bA2tHLeKVj8w6ZG/XwFb+l/lRMnWfzn/3wKt07VkqhvCuFi42FrME6geHKluYhttrvMaihC2SSlSK3E2JltISnc6VO+C10/Csk7YN4TwX806SrVI38TRY4bjW12rWngox7jTxlgjTduQEiQKnlFUYen1M5ZU2zmCTVQ6aMh/8Aw4xooPZK9ndJ+oqzhl4ZjdXxQa3rudHvFoUJosuJSRgRzKLK7GJ26O6tQB8TSx4Vt7A5NVG+4aYShQBABFHsQ6m35K+J2qMhUNCBNRyxR71yGskuwri/ciUajzqlk1WPF80qLKwyl2Rft8WfSNUk/OpsOpWSCnB2iOeLa6ZDjakPJSsohYInxHjVDq8l6DmuGWNI3GVeABjuEuPMLQ0UyoaA6Dfwrn+n6zFg1EcmVWkXMylKDUHT9xMtuHL5tcFpRgaFKgRPxru8HUuh5+ckkvraM15uqYfklf6P9wnh+AXSXULWnKAZMqExBqt1LqXRPus8eCnJqlSff6sPFm6pkyJ55/D5XH9ghjtstbLicqlSkiBMzyrkdHljjzRmnVNM1IxjP4Zdn3FrC8MVspDif8qq7PH9pcseLi/+/UHJ9m9BPnc/1Q5cINrbQ6jKsAkEEpIMxBj4CuW671Kesz48zaTiq4f5h/8Aj9PpIKGJ2ny7djFZqdmFiU9ToaLp/V5zyxxTd3xflFHUaeG1yjxRbrpzOMKQkggxB38aehrZHaW6W0BtAhKdh0E7DwrO1Hwz4L0JOfxS7kilUMJseSFfEHSHDWXr5NyOg0EV6RM1cGKzVkkmWnjRWxK7yircJJhY8bYru3is2YfCtLHH4S7DGuzCFlfExUbQUsKQYQkKGtJIqy4Nw0KBoDyYUwDRBWeSyBSFZktimEbpcI2NM4JguKYu43wuHj2iCArWfGrunk6owuqwipL3BFnwipLqS5qga+Z5CrO5mTQ92gaCYUNfDpVmGFVyVp5nfAuYWzlX4VXxLgsZGAuKH5dA6TTy7m10xVGxn/C29SCtJOuafkKs4flKnV7c0w3x27KCnrRvsZuCW2SZzSyw3mqoI4m2XNb1iOKPDDdq+lB7uhHOrePAkcjrOrZsvyl5zEnD75q0oIx3nyy7spvPk6mT509DcyfLGDhvjItQ0v2RoD0HjUUops09Nq5Yo1LlHSbS4Q+3oQQRUMo0beLKpq0BncOS0co0HKsfPgSlyjVxZLRrB5UEFKKqK4Ck4t8le6YKk6Ak1W1uPJmxuKXIcHGLsrW5jQ6Vy+WDi6aLKdl5tVVWhEwVQUIlQofpBo4TUe6sZpmFKH6QKaUlLsqFRoV0NBEalaitDpkX96hS8oDL8jPOg9K9Csx6KDrqhypWFtPW1+NlSPHlVfLHc7JocIsfmUH3x8aCGP8AAJyBOIWYUcyVJ+IqnrNDKfKNXQ66MVtkRIZKRrFYc9Nkg+Ua8csZ9infNBQqSJPB0CLrBXAkrykJ61rYYzcexJDU49+2+SOwjSDTTg13Lc7DrJ0oCpJEoNCyM9mpUPRqpynUWx1GzXtBUnpTq6FVdzVTwodrBc4LyLmNdqpyW1lPgDWlpYbY8nMdYzrJkSh4I7a5uNlKJFWUoexkXIYG7BcDWpURUCbJ7vH1qnjXBbydxWxlz+MfKml3NzQusaKVviS2HA4g6jfxFHjdMi1tS7j0rHhcNAneKtJWzm9VmWJMDuv1YSUTnck55ZXIFuPKzzOlDfJPGEdoZt35AqRTM+cKZbbQTRcsgckiZGGg6mi9OyN6lrgOYNfu2/smU9PtTvHaJdP1GWF8dg8vHEvCCINZmswz28I6PRdXxSfembWNypB3zCq2JTh3Nn1oZVwFBeoqe4g0zJuWzvHqKjnjxZFUkn9Qk5R7G4t0Hl8KoZOjaWfO39GSrUzRj8unxqrL7P6d9m0H96kZDA6mo/8A85h/5P8Ap/gf72/Ywq38T8qS+zuFf+z/AKf4F97fsRG0H6lfKpo9B08e9v8AMX3tmzbSU7DXrua0cGjxYfkikQzzSn3Z5avCraREV168qcRp2QPKmcUx9zMG0QeQp1BITkzQ4S2eQqVANvugdxBYpbZKk6ECararHBw5RrdJyzeZRb4FjC3FrcbBO5E1k48MN6Os1CUcUmvYfOJAlNovT3T9K6CMI1Rx3T5Tnq1z5OUsKIIiqusxqMT0F8x5GWznLJrHZSn3K95eFNJRQcMe4u2yiRNCRTSToFYisl0JnTSt/pOCM420W8SSx2HW0AJ25Vo6jHFY3wYHUcko4m7KqljmmshQRyryzfdkCw2fdoqYFkSWETpSEE2btQEUakwGhNtLkBZmq8CxIBY3IdnqKd9zS0uT4KBMZlAUUUQajJ3YebXlTV2PCOQzyeXI2Q/mCo0VjemootMM5jT1ZDOaSD1hZVLDGZebOGWWAKnjGjPlNsmgUZGemkKjFM1Y9hHC7jvBKjp1qvlwJq0a/TuoShNQm+B5srRkp2Bqn6aR10Mrku5Oq3bGyRS2oK2Ulpg01BWaimoc8KQjJpqEa09CMEUqERkUw9kShSEYphzIFOObpFKxqAPGS4ZI66VX1L+E2eiw/j2LuAp/iorPxfOjpta/4Mhn42uQLUid4HxNbmJpyRzHR8beqTOcsjvCoepcRO5fyDLbju1hFGXcGYlqoDxovBYxdgvbDuigKs+4Gc1f9RXVdKjWKy72xfkMClQk1Y1b+A5fq0qxFQlJ2NZJzFkK26ehFdcgzFM7EjJuvCh3pdwj/9k=', title: 'Occupational Therapy' },
    { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop', title: 'Special Education Class' },
    { src: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=400&h=300&fit=crop', title: 'Child Development' },
  ]

  return (
    <div style={{ background: '#fff', overflow: 'hidden' }}>
      {/* Hero Carousel Section */}
      <Carousel
        autoplay
        autoplaySpeed={5000}
        effect="fade"
        dotPosition="bottom"
      >
        {heroSlides.map((slide, index) => (
          <div key={index}>
            <div
              style={{
                backgroundImage: `${slide.gradient}, url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '120px 50px',
                minHeight: '620px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
              }}
            >
              <Title 
                level={1} 
                style={{ 
                  color: '#fff', 
                  fontSize: 'clamp(30px, 5vw, 52px)', 
                  marginBottom: '20px', 
                  fontWeight: '800',
                  textShadow: '2px 4px 8px rgba(0,0,0,0.3)',
                  animation: 'slideDown 0.8s ease-out',
                }}
              >
                {slide.title}
              </Title>
              <Title 
                level={2} 
                style={{ 
                  color: '#fff', 
                  fontSize: 'clamp(18px, 3vw, 30px)', 
                  marginBottom: '15px', 
                  fontWeight: '600',
                  animation: 'slideDown 0.8s ease-out 0.2s both',
                }}
              >
                {slide.subtitle}
              </Title>
              <Paragraph 
                style={{ 
                  color: '#fff', 
                  fontSize: 'clamp(15px, 2vw, 20px)', 
                  maxWidth: '700px', 
                  margin: '0 auto 35px',
                  animation: 'slideDown 0.8s ease-out 0.4s both',
                }}
              >
                {slide.description}
              </Paragraph>
              <div style={{ 
                display: 'flex', 
                gap: '20px', 
                flexWrap: 'wrap', 
                justifyContent: 'center',
                animation: 'slideUp 0.8s ease-out 0.6s both',
              }}>
                <Link to="/appointment">
                  <Button
                    size="large"
                    style={{
                      background: '#fff',
                      color: '#00aeef',
                      border: 'none',
                      borderRadius: '50px',
                      height: '55px',
                      padding: '0 40px',
                      fontWeight: '700',
                      fontSize: '16px',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px)'
                      e.currentTarget.style.boxShadow = '0 12px 35px rgba(0,0,0,0.25)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)'
                    }}
                    icon={<CalendarOutlined />}
                  >
                    Book Appointment
                  </Button>
                </Link>
                <a href="tel:+918977510100">
                  <Button
                    size="large"
                    style={{
                      background: 'rgba(255,255,255,0.15)',
                      color: '#fff',
                      border: '2px solid #fff',
                      borderRadius: '50px',
                      height: '55px',
                      padding: '0 40px',
                      fontWeight: '600',
                      fontSize: '16px',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.25)'
                      e.currentTarget.style.transform = 'translateY(-3px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.15)'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                    icon={<PhoneOutlined />}
                  >
                    Call Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      {/* About Section */}
      <div
        data-animate-id="about"
        style={{ padding: '90px 30px', background: '#fff' }}
      >
        <Row gutter={[50, 50]} align="middle" justify="center">
          <Col xs={24} md={12}>
            <div style={{ position: 'relative', ...getSlideFromLeft(0, isVisible('about')) }}>
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=450&fit=crop"
                alt="Child Therapy Session"
                style={{
                  width: '100%',
                  borderRadius: '20px',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.12)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '-20px',
                  right: '-20px',
                  background: 'linear-gradient(135deg, #00aeef 0%, #00a651 100%)',
                  color: '#fff',
                  padding: '18px 28px',
                  borderRadius: '15px',
                  boxShadow: '0 10px 30px rgba(0,174,239,0.3)',
                  ...getSlideFromRight(0.3, isVisible('about')),
                }}
              >
                <div style={{ fontSize: '30px', fontWeight: '800' }}>10+</div>
                <div style={{ fontSize: '13px' }}>Years Experience</div>
              </div>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div style={getSlideFromRight(0.1, isVisible('about'))}>
              <div style={{ 
                color: '#00aeef', 
                fontWeight: '700', 
                marginBottom: '10px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontSize: '13px',
              }}>
                Welcome to Live Well
              </div>
              <Title level={2} style={{ color: '#1e3a5f', marginBottom: '20px', fontSize: 'clamp(26px, 4vw, 38px)' }}>
                India's No. 1 Integrated <span style={{ color: '#00aeef' }}>Autism Network</span>
              </Title>
              <Paragraph style={{ fontSize: '16px', lineHeight: '1.8', color: '#555', marginBottom: '25px' }}>
                Our vision and purpose is to impart life skills to kids with Autism, ADHD and other 
                neurological and sensorial disorders to live maximum independent lives.
              </Paragraph>
              <Row gutter={[15, 15]}>
                {[
                  { icon: <SafetyCertificateFilled />, title: 'Certified Therapists' },
                  { icon: <TeamOutlined />, title: 'Family Support' },
                  { icon: <TrophyFilled />, title: '98% Success Rate' },
                  { icon: <HeartFilled />, title: 'Personalized Care' },
                ].map((item, index) => (
                  <Col xs={12} key={index}>
                    <div 
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '10px',
                        padding: '12px 15px',
                        background: '#f8fbff',
                        borderRadius: '10px',
                        transition: 'all 0.3s ease',
                        cursor: 'default',
                        ...getSlideFromLeft(0.2 + index * 0.1, isVisible('about')),
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateX(5px)'
                        e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,174,239,0.15)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateX(0)'
                        e.currentTarget.style.boxShadow = 'none'
                      }}
                    >
                      <span style={{ color: '#00aeef', fontSize: '22px' }}>{item.icon}</span>
                      <span style={{ fontWeight: '600', color: '#1e3a5f', fontSize: '14px' }}>{item.title}</span>
                    </div>
                  </Col>
                ))}
              </Row>
              <Link to="/about" style={{ marginTop: '25px', display: 'inline-block' }}>
                <Button
                  type="primary"
                  size="large"
                  style={{
                    background: 'linear-gradient(135deg, #00aeef 0%, #00a651 100%)',
                    border: 'none',
                    borderRadius: '50px',
                    height: '48px',
                    padding: '0 35px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)'
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,174,239,0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  Learn More <ArrowRightOutlined />
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </div>

      {/* Services Section */}
      <div 
        data-animate-id="services"
        style={{ padding: '90px 30px', background: '#f8fbff' }}
      >
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{ 
            color: '#00aeef', 
            fontWeight: '700', 
            marginBottom: '10px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            fontSize: '13px',
            ...getSlideFromBottom(0, isVisible('services')),
          }}>
            Our Services
          </div>
          <Title 
            level={2} 
            style={{ 
              color: '#1e3a5f', 
              marginBottom: '15px',
              fontSize: 'clamp(26px, 4vw, 40px)',
              ...getSlideFromBottom(0.1, isVisible('services')),
            }}
          >
            Comprehensive Therapy Services
          </Title>
        </div>
        <Row gutter={[20, 20]} justify="center">
          {services.map((service, index) => (
            <Col xs={12} sm={8} md={6} lg={4} key={index}>
              <Card
                hoverable
                style={{
                  border: `2px solid ${service.color}`,
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  ...getSlideFromLeft(0.1 + index * 0.08, isVisible('services')),
                }}
                bodyStyle={{ padding: '15px' }}
                cover={
                  <div style={{ height: '140px', overflow: 'hidden', position: 'relative' }}>
                    <img 
                      src={service.image} 
                      alt={service.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: `linear-gradient(to bottom, transparent 30%, ${service.color}60 100%)`,
                    }} />
                  </div>
                }
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = `0 15px 35px ${service.color}30`
                  const img = e.currentTarget.querySelector('img')
                  if (img) img.style.transform = 'scale(1.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                  const img = e.currentTarget.querySelector('img')
                  if (img) img.style.transform = 'scale(1)'
                }}
              >
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '10px',
                }}>
                  <div style={{ 
                    fontSize: '24px', 
                    color: service.color,
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: `${service.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    {service.icon}
                  </div>
                  <div style={{ fontWeight: '700', color: '#1e3a5f', fontSize: '13px', lineHeight: '1.3' }}>
                    {service.name}
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
        <div style={{ textAlign: 'center', marginTop: '40px', ...getSlideFromBottom(0.5, isVisible('services')) }}>
          <Link to="/services">
            <Button
              type="primary"
              size="large"
              style={{
                background: 'linear-gradient(135deg, #00aeef 0%, #00a651 100%)',
                border: 'none',
                borderRadius: '50px',
                height: '50px',
                padding: '0 45px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,174,239,0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              View All Services <ArrowRightOutlined />
            </Button>
          </Link>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div
        data-animate-id="why"
        style={{ padding: '90px 30px', background: '#fff' }}
      >
        <Row gutter={[50, 50]} align="middle" justify="center">
          <Col xs={24} md={12} style={{ order: window.innerWidth < 768 ? 2 : 1 }}>
            <div style={getSlideFromLeft(0, isVisible('why'))}>
              <div style={{ 
                color: '#f7941d', 
                fontWeight: '700', 
                marginBottom: '10px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontSize: '13px',
              }}>
                Why Choose Us
              </div>
              <Title level={2} style={{ color: '#1e3a5f', marginBottom: '25px', fontSize: 'clamp(26px, 4vw, 38px)' }}>
                Taking Pediatric Therapy to the <span style={{ color: '#f7941d' }}>Next Level</span>
              </Title>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {[
                  { icon: <CheckCircleOutlined />, text: 'Watch your kids training live', color: '#00a651' },
                  { icon: <SafetyCertificateFilled />, text: 'Certified therapists & educators', color: '#00aeef' },
                  { icon: <TeamOutlined />, text: 'Integrated family approach', color: '#f7941d' },
                  { icon: <TrophyFilled />, text: '98%+ success rate', color: '#e31e24' },
                ].map((item, index) => (
                  <div 
                    key={index} 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '15px',
                      padding: '14px 18px',
                      background: '#f8fbff',
                      borderRadius: '12px',
                      borderLeft: `4px solid ${item.color}`,
                      transition: 'all 0.3s ease',
                      cursor: 'default',
                      ...getSlideFromLeft(0.15 + index * 0.1, isVisible('why')),
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(8px)'
                      e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.08)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    <span style={{ color: item.color, fontSize: '22px' }}>{item.icon}</span>
                    <span style={{ fontSize: '15px', color: '#333', fontWeight: '500' }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </Col>
          <Col xs={24} md={12} style={{ order: window.innerWidth < 768 ? 1 : 2 }}>
            <div style={{ position: 'relative', ...getSlideFromRight(0.1, isVisible('why')) }}>
              <img 
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&h=450&fit=crop"
                alt="Child Learning"
                style={{
                  width: '100%',
                  borderRadius: '20px',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.12)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '15px',
                  left: '-25px',
                  background: '#fff',
                  padding: '15px 22px',
                  borderRadius: '12px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  textAlign: 'center',
                  ...getSlideFromLeft(0.4, isVisible('why')),
                }}
              >
                <div style={{ fontSize: '26px', fontWeight: '800', color: '#e31e24' }}>1000+</div>
                <div style={{ fontSize: '12px', color: '#666' }}>Happy Families</div>
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  right: '-20px',
                  background: '#fff',
                  padding: '15px 22px',
                  borderRadius: '12px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  textAlign: 'center',
                  ...getSlideFromRight(0.5, isVisible('why')),
                }}
              >
                <div style={{ fontSize: '26px', fontWeight: '800', color: '#00a651' }}>50+</div>
                <div style={{ fontSize: '12px', color: '#666' }}>Expert Therapists</div>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      {/* Certifications & Partners Section */}
      {/* <div
        data-animate-id="certs"
        style={{
          padding: '60px 30px',
          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
          borderTop: '1px solid #dee2e6',
          borderBottom: '1px solid #dee2e6',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ 
              color: '#7b1688', 
              fontWeight: '700', 
              marginBottom: '10px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontSize: '13px',
              ...getSlideFromBottom(0, isVisible('certs')),
            }}>
              Trusted & Certified
            </div>
            <Title level={2} style={{ 
              color: '#1e3a5f', 
              marginBottom: '10px', 
              fontSize: 'clamp(24px, 3.5vw, 36px)',
              ...getSlideFromBottom(0.1, isVisible('certs')),
            }}>
              Our <span style={{ color: '#7b1688' }}>Certifications</span> & Partners
            </Title>
          </div>
          
          <Row gutter={[40, 30]} justify="center" align="middle">
           
            <Col xs={12} sm={8} md={6} lg={5}>
              <div
                style={{
                  textAlign: 'center',
                  padding: '25px 20px',
                  background: '#fff',
                  borderRadius: '16px',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                  transition: 'all 0.4s ease',
                  ...getScaleIn(0.1, isVisible('certs')),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(123,22,136,0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.08)'
                }}
              >
                <img 
                  src="https://livewellrehabilitationnetwork.com/wp-content/uploads/2025/04/embled-latest.png"
                  alt="NABH Certification"
                  style={{ 
                    width: '80px', 
                    height: 'auto',
                    marginBottom: '12px',
                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
                  }}
                />
                <div style={{ fontSize: '13px', fontWeight: '600', color: '#1e3a5f' }}>NABH Certified</div>
                <div style={{ fontSize: '11px', color: '#666', marginTop: '3px' }}>Quality Assured</div>
              </div>
            </Col>

          
            <Col xs={12} sm={8} md={6} lg={5}>
              <div
                style={{
                  textAlign: 'center',
                  padding: '25px 20px',
                  background: '#fff',
                  borderRadius: '16px',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                  transition: 'all 0.4s ease',
                  ...getScaleIn(0.2, isVisible('certs')),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(123,22,136,0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.08)'
                }}
              >
                <img 
                  src="https://livewellrehabilitationnetwork.com/wp-content/uploads/2023/08/patron-health-care.png"
                  alt="Patron Health Care"
                  style={{ 
                    width: '140px', 
                    height: 'auto',
                    marginBottom: '12px',
                  }}
                />
                <div style={{ fontSize: '13px', fontWeight: '600', color: '#1e3a5f' }}>Healthcare Partner</div>
                <div style={{ fontSize: '11px', color: '#666', marginTop: '3px' }}>Trusted Network</div>
              </div>
            </Col>

            <Col xs={12} sm={8} md={6} lg={5}>
              <div
                style={{
                  textAlign: 'center',
                  padding: '25px 20px',
                  background: '#fff',
                  borderRadius: '16px',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                  transition: 'all 0.4s ease',
                  ...getScaleIn(0.3, isVisible('certs')),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(123,22,136,0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.08)'
                }}
              >
                <div style={{ 
                  width: '70px', 
                  height: '70px', 
                  margin: '0 auto 12px',
                  background: 'linear-gradient(135deg, #00a651 0%, #00aeef 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <SafetyCertificateFilled style={{ fontSize: '36px', color: '#fff' }} />
                </div>
                <div style={{ fontSize: '13px', fontWeight: '600', color: '#1e3a5f' }}>ISO Certified</div>
                <div style={{ fontSize: '11px', color: '#666', marginTop: '3px' }}>International Standards</div>
              </div>
            </Col>

            <Col xs={12} sm={8} md={6} lg={5}>
              <div
                style={{
                  textAlign: 'center',
                  padding: '25px 20px',
                  background: '#fff',
                  borderRadius: '16px',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                  transition: 'all 0.4s ease',
                  ...getScaleIn(0.4, isVisible('certs')),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(123,22,136,0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.08)'
                }}
              >
                <div style={{ 
                  width: '70px', 
                  height: '70px', 
                  margin: '0 auto 12px',
                  background: 'linear-gradient(135deg, #f7941d 0%, #e31e24 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <TrophyFilled style={{ fontSize: '36px', color: '#fff' }} />
                </div>
                <div style={{ fontSize: '13px', fontWeight: '600', color: '#1e3a5f' }}>Award Winning</div>
                <div style={{ fontSize: '11px', color: '#666', marginTop: '3px' }}>Best Therapy Center</div>
              </div>
            </Col>
          </Row>
        </div>
      </div> */}

      {/* Success Rates Section */}
      <div 
        data-animate-id="stats"
        style={{ 
          padding: '90px 30px', 
          background: 'linear-gradient(135deg, #1e3a5f 0%, #00aeef 100%)',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{ 
            color: 'rgba(255,255,255,0.9)', 
            fontWeight: '700', 
            marginBottom: '10px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            fontSize: '13px',
            ...getSlideFromBottom(0, isVisible('stats')),
          }}>
            Our Achievements
          </div>
          <Title level={2} style={{ 
            color: '#fff', 
            marginBottom: '15px', 
            fontSize: 'clamp(26px, 4vw, 40px)',
            ...getSlideFromBottom(0.1, isVisible('stats')),
          }}>
            Proven Success Rates
          </Title>
        </div>
        <Row gutter={[20, 20]} justify="center">
          {stats.map((stat, index) => (
            <Col xs={12} sm={8} md={6} lg={4} key={index}>
              <div
                style={{
                  textAlign: 'center',
                  padding: '25px 15px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '16px',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.4s ease',
                  ...getSlideFromBottom(0.1 + index * 0.08, isVisible('stats')),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.18)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                }}
              >
                <Progress
                  type="circle"
                  percent={isVisible('stats') ? stat.rate : 0}
                  strokeColor={{ '0%': stat.color, '100%': '#fff' }}
                  trailColor="rgba(255,255,255,0.2)"
                  strokeWidth={8}
                  size={100}
                  format={(percent) => (
                    <span style={{ color: '#fff', fontSize: '24px', fontWeight: '800' }}>
                      {percent}%
                    </span>
                  )}
                />
                <div style={{ color: '#fff', marginTop: '12px', fontWeight: '600', fontSize: '13px' }}>
                  {stat.name}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      {/* Gallery Section */}
      <div
        data-animate-id="gallery"
        style={{ padding: '90px 30px', background: '#fff' }}
      >
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{ 
            color: '#662d91', 
            fontWeight: '700', 
            marginBottom: '10px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            fontSize: '13px',
            ...getSlideFromBottom(0, isVisible('gallery')),
          }}>
            Our Gallery
          </div>
          <Title level={2} style={{ 
            color: '#1e3a5f', 
            marginBottom: '15px', 
            fontSize: 'clamp(26px, 4vw, 40px)',
            ...getSlideFromBottom(0.1, isVisible('gallery')),
          }}>
            See Our Therapy Sessions
          </Title>
        </div>
        <Row gutter={[20, 20]}>
          {galleryImages.map((img, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <div 
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  position: 'relative',
                  transition: 'all 0.4s ease',
                  ...getSlideFromRight(0.1 + index * 0.1, isVisible('gallery')),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)'
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.15)'
                  e.currentTarget.querySelector('img').style.transform = 'scale(1.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.querySelector('img').style.transform = 'scale(1)'
                }}
              >
                <img 
                  src={img.src} 
                  alt={img.title}
                  style={{
                    width: '100%',
                    height: '220px',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                  padding: '35px 18px 18px',
                  color: '#fff',
                  fontWeight: '600',
                  fontSize: '15px',
                }}>
                  {img.title}
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <div style={{ textAlign: 'center', marginTop: '40px', ...getSlideFromBottom(0.5, isVisible('gallery')) }}>
          <Link to="/gallery">
            <Button
              type="primary"
              size="large"
              style={{
                background: 'linear-gradient(135deg, #662d91 0%, #00aeef 100%)',
                border: 'none',
                borderRadius: '50px',
                height: '48px',
                padding: '0 40px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(102,45,145,0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              View Full Gallery <ArrowRightOutlined />
            </Button>
          </Link>
        </div>
      </div>

      {/* Testimonials Section */}
      <div
        data-animate-id="testimonials"
        style={{ padding: '90px 30px', background: '#f8fbff' }}
      >
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{ 
            color: '#ec008c', 
            fontWeight: '700', 
            marginBottom: '10px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            fontSize: '13px',
            ...getSlideFromBottom(0, isVisible('testimonials')),
          }}>
            Testimonials
          </div>
          <Title level={2} style={{ 
            color: '#1e3a5f', 
            marginBottom: '15px', 
            fontSize: 'clamp(26px, 4vw, 40px)',
            ...getSlideFromBottom(0.1, isVisible('testimonials')),
          }}>
            What Parents Say
          </Title>
        </div>
        <Row gutter={[24, 40]} justify="center">
          {testimonials.map((testimonial, index) => (
            <Col xs={24} sm={12} md={6} key={index}>
              <Card
                style={{
                  height: '100%',
                  border: `2px solid ${testimonial.color}`,
                  borderRadius: '16px',
                  position: 'relative',
                  overflow: 'visible',
                  marginTop: '30px',
                  transition: 'all 0.4s ease',
                  ...getSlideFromLeft(0.1 + index * 0.12, isVisible('testimonials')),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = `0 15px 35px ${testimonial.color}25`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-28px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '58px',
                  height: '58px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: `3px solid ${testimonial.color}`,
                  boxShadow: '0 5px 15px rgba(0,0,0,0.12)',
                }}>
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                
                <div style={{ marginTop: '30px', marginBottom: '12px', textAlign: 'center' }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarFilled key={i} style={{ color: '#f7941d', marginRight: '2px', fontSize: '16px' }} />
                  ))}
                </div>
                <Paragraph style={{ fontStyle: 'italic', color: '#555', marginBottom: '18px', minHeight: '65px', textAlign: 'center', fontSize: '14px' }}>
                  "{testimonial.testimonial}"
                </Paragraph>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontWeight: '700', color: '#1e3a5f', fontSize: '15px' }}>{testimonial.name}</div>
                  <div style={{ color: '#888', fontSize: '12px' }}>Parent of {testimonial.child}</div>
                  <div style={{ 
                    color: testimonial.color, 
                    fontSize: '11px', 
                    marginTop: '8px', 
                    fontWeight: '600',
                    background: `${testimonial.color}12`,
                    padding: '5px 14px',
                    borderRadius: '20px',
                    display: 'inline-block',
                  }}>
                    {testimonial.service}
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Featured Products Section */}
      <div 
        data-animate-id="products"
        style={{ padding: '90px 30px', background: '#fff' }}
      >
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{ 
            color: '#00a651', 
            fontWeight: '700', 
            marginBottom: '10px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            fontSize: '13px',
            ...getSlideFromBottom(0, isVisible('products')),
          }}>
            Our Shop
          </div>
          <Title level={2} style={{ 
            color: '#1e3a5f', 
            margin: 0, 
            fontSize: 'clamp(26px, 4vw, 40px)',
            ...getSlideFromBottom(0.1, isVisible('products')),
          }}>
            Child Development Products
          </Title>
        </div>
        <Row gutter={[24, 24]}>
          {featuredProducts.map((product, index) => (
            <Col xs={24} sm={12} md={6} key={product.id}>
              <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                <Card
                  hoverable
                  cover={
                    <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                      <img 
                        src={product.image} 
                        alt={product.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.5s ease',
                        }}
                      />
                      <div style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        background: 'linear-gradient(135deg, #00aeef 0%, #00a651 100%)',
                        color: '#fff',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '11px',
                        fontWeight: '600',
                      }}>
                        {product.category}
                      </div>
                    </div>
                  }
                  style={{ 
                    borderRadius: '16px',
                    overflow: 'hidden',
                    transition: 'all 0.4s ease',
                    ...getSlideFromBottom(0.1 + index * 0.1, isVisible('products')),
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)'
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)'
                    e.currentTarget.querySelector('img').style.transform = 'scale(1.08)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                    e.currentTarget.querySelector('img').style.transform = 'scale(1)'
                  }}
                >
                  <Card.Meta
                    title={<span style={{ color: '#1e3a5f', fontWeight: '700', fontSize: '15px' }}>{product.name}</span>}
                    description={
                      <div>
                        <div style={{ color: '#00aeef', fontSize: '22px', fontWeight: '800', marginTop: '8px' }}>
                          ${product.price}
                        </div>
                        <div style={{ color: '#f7941d', marginTop: '6px' }}>
                          {[...Array(Math.floor(product.rating))].map((_, i) => (
                            <StarFilled key={i} style={{ marginRight: '2px', fontSize: '14px' }} />
                          ))}
                          <span style={{ color: '#888', marginLeft: '6px', fontSize: '13px' }}>{product.rating}</span>
                        </div>
                      </div>
                    }
                  />
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
        <div style={{ textAlign: 'center', marginTop: '45px', ...getSlideFromBottom(0.5, isVisible('products')) }}>
          <Link to="/products">
            <Button
              type="primary"
              size="large"
              style={{
                background: 'linear-gradient(135deg, #00aeef 0%, #00a651 100%)',
                border: 'none',
                borderRadius: '50px',
                height: '50px',
                padding: '0 45px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,174,239,0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              View All Products <ArrowRightOutlined />
            </Button>
          </Link>
        </div>
      </div>

      {/* CTA Section */}
      <div
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(227,30,36,0.92) 0%, rgba(247,148,29,0.92) 50%, rgba(255,242,0,0.92) 100%), url(https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1920&h=600&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '90px 30px',
          textAlign: 'center',
        }}
      >
        <Title level={2} style={{ color: '#fff', marginBottom: '18px', textShadow: '2px 4px 8px rgba(0,0,0,0.2)', fontSize: 'clamp(26px, 4vw, 40px)' }}>
          Start Your Child's Journey Today!
        </Title>
        <Paragraph style={{ color: '#fff', fontSize: '18px', marginBottom: '35px', maxWidth: '650px', margin: '0 auto 35px' }}>
          Join India's No. 1 Integrated Autism Network. Book your appointment now!
        </Paragraph>
        <div style={{ display: 'flex', gap: '18px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/appointment">
            <Button
              size="large"
              style={{
                background: '#fff',
                color: '#e31e24',
                border: 'none',
                borderRadius: '50px',
                height: '55px',
                padding: '0 45px',
                fontWeight: '700',
                fontSize: '16px',
                boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(0,0,0,0.25)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)'
              }}
            >
              <CalendarOutlined /> Book Appointment
            </Button>
          </Link>
          <a href="tel:+918977510100">
            <Button
              size="large"
              style={{
                background: 'rgba(255,255,255,0.15)',
                color: '#fff',
                border: '2px solid #fff',
                borderRadius: '50px',
                height: '55px',
                padding: '0 45px',
                fontWeight: '600',
                fontSize: '16px',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.25)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.15)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <PhoneOutlined /> +91 8977510100
            </Button>
          </a>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

export default Home
