import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-model-upload',
  templateUrl: './model-upload.component.html',
  styleUrls: ['./model-upload.component.css']
})
export class ModelUploadComponent {
  modelName: string="";
  filePath: string="";
  file: File | null = null; 

  constructor(private http: HttpClient) {}

  onFileChange(event: any) {
    this.file = event.target.files[0];
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('modelName', this.modelName);
    formData.append('filePath', this.filePath);
    if (this.file) {
      formData.append('file', this.file);
    }

    this.http.post('http://localhost:5281/api/cars/add', formData).subscribe(
      () => {
        console.log('Upload successful!');
        // Handle success, e.g., show a success message or redirect
      },
      (error) => {
        console.error('Upload failed:', error);
        // Handle error, e.g., show an error message
      }
    );
  }
}
