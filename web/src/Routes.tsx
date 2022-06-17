// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import AppShellLayout from 'src/layouts/AppShellLayout/AppShellLayout'
import PostsLayout from 'src/layouts/PostsLayout'

import { useAuth } from '@redwoodjs/auth'
import { Route, Router, Set } from '@redwoodjs/router'

import { LanguageProvider } from './contexts/LanguageContext'
import ArticlePage from './pages/ArticlePage/ArticlePage'
import BookmarksPage from './pages/BookmarksPage/BookmarksPage'
import CollectionPage from './pages/CollectionPage/CollectionPage'

const Routes = () => {
  const { isAuthenticated } = useAuth()

  return (
    <Router>
      <Set private unauthenticated="home">
        <Set wrap={PostsLayout}>
          <Route path="/admin/posts/new" page={PostNewPostPage} name="newPost" />
          <Route path="/admin/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
          <Route path="/admin/posts/{id:Int}" page={PostPostPage} name="post" />
          <Route path="/admin/posts" page={PostPostsPage} name="posts" />
        </Set>
      </Set>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Route path={isAuthenticated ? '/landing' : '/'} page={LandingPage} name="landing" />
      {/* private unauthenticated="login" */}
      <Set wrap={AppShellLayout}>
        <Route path="/article/{id:Int}" page={ArticlePage} name="article" />
      </Set>
      <Set wrap={[AppShellLayout, LanguageProvider]}>
        <Route path="/create" page={CreatePostPage} name="create" />
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/home" page={HomePage} name="home" />
        {isAuthenticated && <Route path="/" page={HomePage} name="home" />}
        <Route path="/settings" page={SettingsPage} name="settings" />
        <Route path="/account" page={AccountSettingsPage} name="accountSettings" />
        <Route path="/bookmarks" page={BookmarksPage} name="bookmarks" />
        <Route path="/collection" page={CollectionPage} name="collection" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
