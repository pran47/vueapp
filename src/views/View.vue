<template>
  <div id="view-page">
    <div class="container py-5">
        <div class="row">
          <div class="col-12">
            <div class="breadcrumb-block">
                <div class="row mx-0 mb-3">
                    <ol class="breadcrumb col-md-6 small bg-white">
                        <li class="breadcrumb-item">
                            <router-link to="/" class="text-dark">Home</router-link>
                        </li>
                        <li class="breadcrumb-item active">Single</li>
                    </ol>
                    <div class="breadcrumb-call-to-action col-md-6 text-right pr-0">
                        <router-link to="/listing" class="btn btn-outline-secondary btn-sm mr-4"><font-awesome-icon icon="list" /> Back to List</router-link>
                        <a href="javascript:void(0)" class="text-dark"><font-awesome-icon icon="phone" /> +1-0000-000-000</a>
                        <a href="javascript:void(0)" class="btn btn-danger btn-sm font-weight-bold ml-4 text-uppercase">Contact Us</a>
                    </div>
                 </div>
              </div>
        </div>

             <div class="col-lg-3">
                <div class="sidebar">
                    <div class="widget contact-widget">
                        <p class="address">
                            <font-awesome-icon icon="map-marker-alt" />
                            <span>256 Christchurch Road,
                                <br> California, CA785853</span>
                        </p>
                        <p>
                            <font-awesome-icon icon="phone" />
                            <span>
                                +1-0000-000-000
                                <br> +1-0000-000-000
                            </span>
                        </p>
                        <p>
                            <font-awesome-icon icon="envelope" />
                            <span>
                                info@example.com
                            </span>
                        </p>
                        <p>
                            <font-awesome-icon icon="globe" />
                            <span>
                                www.example.com
                            </span>
                        </p>
                        <ul class="social">
                            <li>
                                <a href="javascript:void(0)">
                                     <font-awesome-icon :icon="['fab', 'facebook-f']" />
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <font-awesome-icon :icon="['fab', 'twitter']" />
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <font-awesome-icon :icon="['fab', 'youtube']" />
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <font-awesome-icon :icon="['fab', 'vimeo']" />
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <font-awesome-icon :icon="['fab', 'google-plus']" />
                                </a>
                            </li>
                        </ul>
                        <p>
                            <font-awesome-icon icon="location-arrow" />
                            <a href="javascript:void(0)" class="text-dark">
                                Get Direction
                            </a>
                        </p>
                    </div>
                    <!-- widget -->
                    <div class="widget ad-widget">
                        <a href="javscript:void(0)">
                            <img src="@/assets/images/ad.jpg" alt="img" class="img-fluid">
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-lg-9">
                
                <article class="single-post">
                    <div class="post-thumb">
                        <img src="@/assets/images/19.jpg" alt="img" class="img-fluid">
                    </div>
                    <h3 class="my-4">{{test}}<br> {{post.title}}</h3>
                    <p class="post-entry">
                        {{post.body}}
                    </p>
                </article>

                <hr class="mt-5">

                <ul class="comment-section">

                    <li class="comment user-comment">
                        <div class="info">
                            <a href="#">Anie Silverston</a>
                            <span>4 hours ago</span>
                        </div>
                        <a class="avatar" href="#">
                            <img src="http://i.pravatar.cc/100" width="35" alt="Profile Avatar" title="Anie Silverston" />
                        </a>
                        <p>Suspendisse gravida sem?</p>
                    </li>

                    <li class="comment author-comment">
                        <div class="info">
                            <a href="#">Jack Smith</a>
                            <span>3 hours ago</span>
                        </div>
                        <a class="avatar" href="#">
                            <img src="http://i.pravatar.cc/100" width="35" alt="Profile Avatar" title="Jack Smith" />
                        </a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse gravida sem sit amet molestie portitor.</p>

                    </li>

                    <!-- More comments -->

                    <li class="write-new">

                        <form action="#" method="post">
                            <textarea placeholder="Write your comment here" name="comment"></textarea>
                            <div>
                                <img src="http://i.pravatar.cc/100" width="35" alt="Profile of Bradley Jones" title="Bradley Jones" />
                                <button type="submit">Submit</button>
                            </div>
                        </form>

                    </li>

                </ul>

            </div>           
        </div>
    </div>
  </div>
</template>

<script>
const api = "https://jsonplaceholder.typicode.com/posts/";
import axios from "axios";

export default {
  name: "viewpage",
  props: ["id"],
  data() {
    return {
      test: "post - " + this.id,
      post: []
    };
  },
  created() {
    axios
      .get(api + this.id)
      .then(response => {
        this.post = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>

<style scoped>
.sidebar .widget {
  margin-bottom: 30px;
  -webkit-box-shadow: 0px 1px 11px -1px rgba(216, 216, 216, 0.75);
  -moz-box-shadow: 0px 1px 11px -1px rgba(216, 216, 216, 0.75);
  box-shadow: 0px 1px 11px -1px rgba(216, 216, 216, 0.75);
}
.contact-widget {
  padding: 25px 30px 13px 30px;
}
.contact-widget p {
  margin-bottom: 12px;
  line-height: 20px;
  font-size: 0.9rem;
}
.contact-widget p svg {
  display: inline-block;
  margin-right: 9px;
  vertical-align: top;
}
.sidebar .widget span {
  font-size: 0.9rem;
}
.contact-widget p span {
  display: inline-block;
  width: calc(100% - 25px);
}
.contact-widget ul.social {
  margin: 5px 0 15px 0;
}
ul.social {
  margin: 0;
  padding: 0;
  display: inline-block;
}
ul.social li {
  list-style: none;
  display: inline-block;
  margin: 0 4px 0 0;
}
.contact-widget ul.social li a {
  width: 30px;
  height: 30px;
  display: block;
  border: 1px solid #fd880a;
  border-radius: 50%;
  color: #111;
  text-align: center;
  line-height: 27px;
  font-size: 13px;
  -webkit-transition: 0.3s ease-in;
  -o-transition: 0.3s ease-in;
  transition: 0.3s ease-in;
}

.comment-section {
  list-style: none;
  width: 100%;
  margin: 50px auto;
  padding: 0px;
}

.comment {
  display: flex;
  border-radius: 3px;
  margin-bottom: 45px;
  flex-wrap: wrap;
}

.comment.user-comment {
  color: #808080;
}

.comment.author-comment {
  color: #60686d;
  justify-content: flex-end;
}

/* User and time info */

.comment .info {
  width: 17%;
}

.comment.user-comment .info {
  text-align: right;
}

.comment.author-comment .info {
  order: 3;
}

.comment .info a {
  /* User name */
  display: block;
  text-decoration: none;
  color: #656c71;
  font-weight: bold;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding: 10px 0 3px 0;
}

.comment .info span {
  /* Time */
  font-size: 11px;
  color: #9ca7af;
}

/* The user avatar */

.comment .avatar {
  width: 8%;
}

.comment.user-comment .avatar {
  padding: 10px 18px 0 3px;
}

.comment.author-comment .avatar {
  order: 2;
  padding: 10px 3px 0 18px;
}

.comment .avatar img {
  display: block;
  border-radius: 50%;
}

.comment.user-comment .avatar img {
  float: right;
}

/* The comment text */

.comment p {
  line-height: 1.5;
  padding: 18px 22px;
  font-size: 0.9rem;
  position: relative;
  word-wrap: break-word;
}

.comment.user-comment p {
  background-color: #f3f3f3;
}

.comment.author-comment p {
  background-color: #e2f8ff;
  order: 1;
}

.user-comment p:after {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #ffffff;
  border: 2px solid #f3f3f3;
  left: -8px;
  top: 18px;
}

.author-comment p:after {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #ffffff;
  border: 2px solid #e2f8ff;
  right: -8px;
  top: 18px;
}

/* Comment form */

.write-new {
  margin: 80px auto 0;
}

.write-new textarea {
  color: #444;
  font: inherit;

  outline: 0;
  border-radius: 3px;
  border: 1px solid #cecece;
  background-color: #fefefe;
  box-shadow: 1px 2px 1px 0 rgba(0, 0, 0, 0.06);
  overflow: auto;

  width: 100%;
  min-height: 80px;
  padding: 15px 20px;
}

.write-new img {
  border-radius: 50%;
  margin-top: 15px;
}

.write-new button {
  float: right;
  background-color: #87bae1;
  box-shadow: 1px 2px 1px 0 rgba(0, 0, 0, 0.12);
  border-radius: 2px;
  border: 0;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;

  padding: 10px 25px;
  margin-top: 18px;
}

/* Responsive styles */

@media (max-width: 800px) {
  /* Make the paragraph in the comments take up the whole width,
    forcing the avatar and user info to wrap to the next line*/
  .comment p {
    width: 100%;
  }

  /* Reverse the order of elements in the user comments,
    so that the avatar and info appear after the text. */
  .comment.user-comment .info {
    order: 3;
    text-align: left;
  }

  .comment.user-comment .avatar {
    order: 2;
  }

  .comment.user-comment p {
    order: 1;
  }

  /* Align toward the beginning of the container (to the left)
    all the elements inside the author comments. */
  .comment.author-comment {
    justify-content: flex-start;
  }

  .comment-section {
    margin-top: 10px;
  }

  .comment .info {
    width: auto;
  }

  .comment .info a {
    padding-top: 15px;
  }

  .comment.user-comment .avatar,
  .comment.author-comment .avatar {
    padding: 15px 10px 0 18px;
    width: auto;
  }

  .comment.user-comment p:after,
  .comment.author-comment p:after {
    width: 12px;
    height: 12px;
    top: initial;
    left: 28px;
    bottom: -6px;
  }

  .write-new {
    width: 100%;
  }
}
</style>
