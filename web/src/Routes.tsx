// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import PostsLayout from 'src/layouts/PostsLayout'
import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'
import ArticlePage from './pages/ArticlePage/ArticlePage'

const Routes = () => {
  return (
    <Router>
      <Set wrap={PostsLayout}>
        <Route path="/admin/posts/new" page={PostNewPostPage} name="newPost" />
        <Route path="/admin/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
        <Route path="/admin/posts/{id:Int}" page={PostPostPage} name="post" />
        <Route path="/admin/posts" page={PostPostsPage} name="posts" />
      </Set>
      <Route path="/" page={LandingPage} name="landing" />
      <Set wrap={BlogLayout}>
        <Route path="/article/{id:Int}" page={ArticlePage} name="article" />
        <Route path="/home" page={HomePage} name="home" />
        <Route path="/settings" page={SettingsPage} name="settings" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
