import { Component } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent {
  blogs: any[] = [];
  loading = false;
  errorMessage = '';
  currentPage = 1;

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.fetchBlogs();
  }

  fetchBlogs() {
    this.loading = true;
    this.errorMessage = '';

    this.blogService.getBlogPosts(this.currentPage).subscribe({
      next: (data) => {
        console.log(data)
        this.blogs = data;
        this.loading = false;
      },
      error: (error) => {
        this.errorMessage = error.message;
        this.loading = false;
      },
    });

  }

  changePage(newPage: number) {
    this.currentPage = newPage;
    this.fetchBlogs();
  }

}
