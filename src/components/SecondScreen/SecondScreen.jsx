
import React, { useState } from 'react';
const SecondScreen = ({movie}) => {
 
 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem('userDetails', JSON.stringify(formData));

    setFormData({
      name: '',
      email: '',
      phone: ''
    });
  };
    
      return (
        <div className="container mt-4">
        <h1>Movie Summary</h1>
        <div className="row">
          <div className="col-md-6">
            <img src={movie.image.medium} alt={movie.name} className="img-fluid mb-4" />
            <h2>{movie.name}</h2>
            <p>{movie.summary}</p>
          </div>
          <div className="col-md-6">
            <h2>Book Ticket</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary mt-4">Book Ticket</button>
            </form>
          </div>
        </div>
      </div>
    );
  };

export default SecondScreen;