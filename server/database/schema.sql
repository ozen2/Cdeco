CREATE TABLE user (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  firstname VARCHAR(80) NOT NULL,
  lastname VARCHAR(80) NOT NULL,
  email VARCHAR(80) UNIQUE NOT NULL,
  password VARCHAR(80) NOT NULL,
  phone VARCHAR(80),
  role VARCHAR(80) NOT NULL DEFAULT 'member'
);

CREATE TABLE admin (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  user_id INT UNSIGNED NOT NULL,
    CONSTRAINT fk_admin_user
    FOREIGN KEY (user_id)
    REFERENCES user(id)
);

CREATE TABLE member (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  user_id INT UNSIGNED NOT NULL,
    CONSTRAINT fk_member_user
    FOREIGN KEY (user_id)
    REFERENCES user(id)
);

CREATE TABLE product (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(80) NOT NULL,
  details TEXT NOT NULL,
  dimensions VARCHAR(80) NOT NULL,
  materials VARCHAR(80) NOT NULL,
  price VARCHAR(80) NOT NULL,
  picture LONGTEXT,
  path TEXT
);

CREATE TABLE comment (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  content VARCHAR(80) NOT NULL,
  product_id INT UNSIGNED NOT NULL,
    CONSTRAINT fk_comment_product
    FOREIGN KEY (product_id)
    REFERENCES product(id)
);

CREATE TABLE comment_member (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  comment_id INT UNSIGNED NOT NULL,
  member_id INT UNSIGNED NOT NULL,
    CONSTRAINT fk_comment_member_comment
    FOREIGN KEY (comment_id)
    REFERENCES comment(id),
    CONSTRAINT fk_comment_member_member
    FOREIGN KEY (member_id)
    REFERENCES member(id)
);

CREATE TABLE product_admin (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  product_id INT UNSIGNED NOT NULL,
  admin_id INT UNSIGNED NOT NULL,
    CONSTRAINT fk_product_admin_product
    FOREIGN KEY (product_id)
    REFERENCES product(id),
    CONSTRAINT fk_product_admin_admin
    FOREIGN KEY (admin_id)
    REFERENCES admin(id)
);