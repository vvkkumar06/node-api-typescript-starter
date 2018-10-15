import { Router, Request, Response, NextFunction } from 'express';
import Post from '../models/Posts';

class PostsRouter {
  
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();  
  }

  public GetPosts(req: Request, res: Response): void {
    Post.find({})
    .then((results) => {
      const status = res.statusCode;
      res.json({
        status,
        results
      })
    })
    .catch((error) => {
      const status = res.statusCode;
      res.json({
        status,
        error
      })
    });
  }

  public GetPost(req: Request, res: Response): void {

  }

  public CreatePost(req: Request, res: Response): void {

  }

  public UpdatePost(req: Request, res: Response): void {

  }

  public DeletePost(req: Request, res: Response): void {

  }

  routes(): void {
    this.router.get('/posts', this.GetPosts);
  }
}

// export
const postsRoutes = new PostsRouter();
postsRoutes.routes();

export default postsRoutes;