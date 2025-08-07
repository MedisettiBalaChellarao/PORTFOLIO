import React, { useState } from 'react';
import { MdEmail, MdLocationOn, MdAccessTime } from 'react-icons/md';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { TextField, MenuItem, Button, Paper } from '@mui/material';

const ContactSection = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const SERVICE_ID = 'service_0gc5jdq';
    const TEMPLATE_ID = 'template_xapce1w';
    const PUBLIC_KEY = 'PiyhsSXavGt6ktL_1';

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      .then(() => {
        alert('Message sent successfully!');
        setForm({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        alert('Failed to send message. Please try again.');
      });
  };

  const subjects = [
    'Web Development',
    'Collaboration',
    'Freelance Inquiry',
    'Other',
  ];

  return (
    <section className="min-h-screen bg-[#0e0e0e] text-white px-4 py-20 md:px-16 lg:px-32">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-green-400 "
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 mt-2"
        >
          Let's discuss your next project or just say hello!
        </motion.p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 space-y-6"
        >
          <h3 className="text-2xl font-semibold text-green-400">Let's Connect</h3>
          <p className="text-gray-300">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and development.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <MdEmail className="text-green-400 text-xl" />
              <span className="text-white">balachellarao25@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <MdLocationOn className="text-green-400 text-xl" />
              <span className="text-white">Kakinada, AndhraPradesh, India</span>
            </div>
            <div className="flex items-center gap-4">
              <MdAccessTime className="text-green-400 text-xl" />
              <span className="text-white">Within 24 hours</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <Paper elevation={3} className="p-8 bg-[#1a1a1a] rounded-xl space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                <TextField
                  label="First Name "
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  required
                  InputProps={{ style: { color: 'black' } }}
                  InputLabelProps={{ style: { color: '#9ca3af' } }}
                />
                <TextField
                  label="Last Name "
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  required
                  InputProps={{ style: { color: 'white' } }}
                  InputLabelProps={{ style: { color: '#9ca3af' } }}
                />
              </div>

              <TextField
                label="Email "
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
                placeholder="Please Provide Your Email"
                InputProps={{ style: { color: 'black' } }}
                InputLabelProps={{ style: { color: '#9ca3af' } }}
              />

              <TextField
                label="Subject "
                name="subject"
                value={form.subject}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
                select
                InputProps={{ style: { color: 'black' } }}
                InputLabelProps={{ style: { color: '#9ca3af' } }}
              >
                {subjects.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                label="Message "
                name="message"
                value={form.message}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                multiline
                minRows={4}
                required
                placeholder="Tell me about your project or how I can help you..."
                InputProps={{ style: { color: 'black' } }}
                InputLabelProps={{ style: { color: '#9ca3af' } }}
              />

              <p className="text-sm text-gray-400">
                💡 Tip: Write a meaningful message with at least 3 words and 10 characters. Avoid random characters or excessive repetition.
              </p>

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: '#10b981',
                  '&:hover': { backgroundColor: '#059669' },
                  padding: '0.75rem',
                  fontWeight: 600,
                  fontSize: '1rem',
                  borderRadius: '0.5rem',
                }}
              >
                Send Message
              </Button>
            </form>
          </Paper>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;