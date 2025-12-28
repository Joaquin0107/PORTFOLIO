import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    // Crear el mailto con los datos del formulario
    const mailtoLink = `mailto:joaquin20040107@gmail.com?subject=${encodeURIComponent(this.formData.subject)}&body=${encodeURIComponent(
      `Nombre: ${this.formData.name}\nEmail: ${this.formData.email}\n\nMensaje:\n${this.formData.message}`
    )}`;
    
    // Abrir el cliente de correo
    window.location.href = mailtoLink;
    
    // Opcional: Limpiar el formulario
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}