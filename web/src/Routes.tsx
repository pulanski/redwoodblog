// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, useLocation, navigate } from '@redwoodjs/router'
import PostsLayout from 'src/layouts/PostsLayout'
import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'
import ArticlePage from './pages/ArticlePage/ArticlePage'
import { useAuth } from '@redwoodjs/auth'
import { useEffect } from 'react'

const Routes = () => {
  const { isAuthenticated } = useAuth()

  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Set private wrap={PostsLayout} unauthenticated="home">
        <Route path="/admin/posts/new" page={PostNewPostPage} name="newPost" />
        <Route path="/admin/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
        <Route path="/admin/posts/{id:Int}" page={PostPostPage} name="post" />
        <Route path="/admin/posts" page={PostPostsPage} name="posts" />
      </Set>
      <Route path={isAuthenticated ? '/landing' : '/'} page={LandingPage} name="landing" />
      <Set private wrap={BlogLayout} unauthenticated="login">
        <Route path="/article/{id:Int}" page={ArticlePage} name="article" />
      </Set>
      <Set wrap={BlogLayout}>
        <Route path="/contact" page={ContactPage} name="contact" />
        {/* <Route path={isAuthenticated ? "/" : "/home"} page={HomePage} name="home" /> */}
        <Route path="/home" page={HomePage} name="home" />
        {isAuthenticated && <Route path="/" page={HomePage} name="home" />}
        <Route path="/settings" page={SettingsPage} name="settings" />
        <Route path="/account" page={AccountSettingsPage} name="accountSettings" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
