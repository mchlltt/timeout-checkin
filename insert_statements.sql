USE needs_db;

insert into FeelingSuperCategories (name)
values ('angry'),
	   ('bad'),
	   ('disgusted'),
	   ('fearful'),
	   ('happy'),
	   ('sad'),
	   ('surprised');

# insert categories for super category angry
insert into FeelingCategories (name, FeelingSuperCategoryId)
values ('let down', 1),
	   ('humiliated', 1),
	   ('bitter', 1),
	   ('mad', 1),
	   ('aggressive', 1),
	   ('frustrated', 1),
	   ('distant', 1),
	   ('critical', 1);

# insert categories for super category bad
insert into FeelingCategories (name, FeelingSuperCategoryId)
values ('bored', 2),
       ('busy', 2),
       ('stressed', 2),
       ('tired', 2);
       
# insert categories for super category disgusted
insert into FeelingCategories (name, FeelingSuperCategoryId)
values ('awful', 3),
       ('disappointed', 3),
       ('disapproving', 3),
       ('repelled', 3);
       
# insert categories for super category fearful
insert into FeelingCategories (name, FeelingSuperCategoryId)
values ('anxious', 4),
       ('insecure', 4),
       ('rejected', 4),
       ('scared', 4),
       ('threatened', 4),
       ('weak', 4);
       
# insert categories for super category happy
insert into FeelingCategories (name, FeelingSuperCategoryId)
values ('accepted', 5),
       ('content', 5),
       ('interested', 5),
       ('optimistic', 5),
       ('peaceful', 5),
       ('playful', 5),
       ('powerful', 5),
       ('proud', 5),
       ('trusting', 5);
       
# insert categories for super category sad
insert into FeelingCategories (name, FeelingSuperCategoryId)
values ('depressed', 6),
       ('despair', 6),
       ('guilty', 6),
       ('hurt', 6),
       ('lonely', 6),
       ('vulnerable', 6);
       
# insert categories for super category surprised
insert into FeelingCategories (name, FeelingSuperCategoryId)
values ('amazed', 7),
       ('confused', 7),
       ('excited', 7),
       ('startled', 7);
       
# insert feeling for category let down
insert into Feelings (name, FeelingCategoryId)
values ('betrayed', 1),
       ('resentful', 1);
       
# insert feeling for category humiliated
insert into Feelings (name, FeelingCategoryId)
values ('disrespected', 2),
       ('ridiculed', 2);
       
# insert feeling for category bitter
insert into Feelings (name, FeelingCategoryId)
values ('indignant', 3),
       ('violated', 3);
       
# insert feeling for category mad
insert into Feelings (name, FeelingCategoryId)
values ('furious', 4),
       ('jealous', 4);
       
# insert feeling for category aggressive
insert into Feelings (name, FeelingCategoryId)
values ('provoked', 5),
       ('hostile', 5);
       
# insert feeling for category frustrated
insert into Feelings (name, FeelingCategoryId)
values ('infuriated', 6),
       ('annoyed', 6);
       
# insert feeling for category distant
insert into Feelings (name, FeelingCategoryId)
values ('withdrawn', 7),
       ('numb', 7);
       
# insert feeling for category critical
insert into Feelings (name, FeelingCategoryId)
values ('sceptical', 8),
       ('dismissive', 8);
       
# insert feeling for category bored
insert into Feelings (name, FeelingCategoryId)
values ('indifferent', 9),
       ('apathetic', 9);
       
# insert feeling for category busy
insert into Feelings (name, FeelingCategoryId)
values ('pressured', 10),
       ('rushed', 10);
       
# insert feeling for category stressed
insert into Feelings (name, FeelingCategoryId)
values ('overwhelmed', 11),
       ('out of control', 11);
       
# insert feeling for category tired
insert into Feelings (name, FeelingCategoryId)
values ('sleepy', 12),
       ('unfocused', 12);
       
# insert feeling for category awful
insert into Feelings (name, FeelingCategoryId)
values ('nauseated', 13),
       ('detestable', 13);
       
# insert feeling for category disappointed
insert into Feelings (name, FeelingCategoryId)
values ('appalled', 14),
       ('revolted', 14);
       
# insert feeling for category disapproving
insert into Feelings (name, FeelingCategoryId)
values ('judgemental', 15),
       ('embarassed', 15);
       
# insert feeling for category repelled
insert into Feelings (name, FeelingCategoryId)
values ('horrified', 16),
       ('hesitant', 16);
       
# insert feeling for category anxious
insert into Feelings (name, FeelingCategoryId)
values ('overwhelmed', 17),
       ('worried', 17);
       
# insert feeling for category insecure
insert into Feelings (name, FeelingCategoryId)
values ('inadequate', 18),
       ('inferior', 18);
       
# insert feeling for category rejected
insert into Feelings (name, FeelingCategoryId)
values ('excluded', 19),
       ('persecuted', 19);
       
# insert feeling for category scared
insert into Feelings (name, FeelingCategoryId)
values ('helpless', 20),
       ('frightened', 20);
       
# insert feeling for category threatened
insert into Feelings (name, FeelingCategoryId)
values ('nervous', 21),
       ('exposed', 21);
       
# insert feeling for category weak
insert into Feelings (name, FeelingCategoryId)
values ('worthless', 22),
       ('insignificant', 22);

# insert feeling for category accepted
insert into Feelings (name, FeelingCategoryId)
values ('respected', 23),
       ('valued', 23);

# insert feeling for category content
insert into Feelings (name, FeelingCategoryId)
values ('free', 24),
       ('joyful', 24);

# insert feeling for category interested
insert into Feelings (name, FeelingCategoryId)
values ('curious', 25),
       ('inquisitive', 25);

# insert feeling for category optimistic
insert into Feelings (name, FeelingCategoryId)
values ('hopeful', 26),
       ('inspired', 26);

# insert feeling for category peaceful
insert into Feelings (name, FeelingCategoryId)
values ('loving', 27),
       ('thankful', 27);

# insert feeling for category playful
insert into Feelings (name, FeelingCategoryId)
values ('aroused', 28),
       ('cheeky', 28);

# insert feeling for category powerful
insert into Feelings (name, FeelingCategoryId)
values ('courageous', 29),
       ('creative', 29);

# insert feeling for category proud
insert into Feelings (name, FeelingCategoryId)
values ('successful', 30),
       ('confident', 30);

# insert feeling for category trusting
insert into Feelings (name, FeelingCategoryId)
values ('sensitive', 31),
       ('intimate', 31);

# insert feeling for category depressed
insert into Feelings (name, FeelingCategoryId)
values ('inferior', 32),
       ('empty', 32);

# insert feeling for category despair
insert into Feelings (name, FeelingCategoryId)
values ('grief', 33),
       ('powerless', 33);

# insert feeling for category guilty
insert into Feelings (name, FeelingCategoryId)
values ('ashamed', 34),
       ('remorseful', 34);

# insert feeling for category hurt
insert into Feelings (name, FeelingCategoryId)
values ('embarassed', 35),
       ('disappointed', 35);

# insert feeling for category lonely
insert into Feelings (name, FeelingCategoryId)
values ('isolated', 36),
       ('abandoned', 36);

# insert feeling for category vulnerable
insert into Feelings (name, FeelingCategoryId)
values ('victimized', 37),
       ('fragile', 37);

# insert feeling for category amazed
insert into Feelings (name, FeelingCategoryId)
values ('astonished', 38),
       ('awe', 38);

# insert feeling for category confused
insert into Feelings (name, FeelingCategoryId)
values ('disillusioned', 39),
       ('perplexed', 39);

# insert feeling for category excited
insert into Feelings (name, FeelingCategoryId)
values ('eager', 40),
       ('energetic', 40);

# insert feeling for category startled
insert into Feelings (name, FeelingCategoryId)
values ('shocked', 41),
       ('dismayed', 41);
       
# insert resource categories
insert into ResourceCategories (name)
values ('relax'),
	   ('distract'),
	   ('inspire'),
	   ('cope');

# insert resource for category relax
insert into Resources (name, content, embed, ResourceCategoryId)
values ('Havasupai Indian Waterfall Relaxation', 'https://www.youtube.com/watch?v=PYs5zyM9zk8', 'https://www.youtube.com/embed/PYs5zyM9zk8', 1),
	   ('Thunder, Rain, and Flowing Stream', 'https://www.youtube.com/watch?v=PvdOyWKQfO8','https://www.youtube.com/embed/PvdOyWKQfO8', 1),
	   ('Flowers', 'https://www.youtube.com/watch?v=apkexltdO-0', 'https://www.youtube.com/embed/apkexltdO-0', 1);
	  
# insert resource for category distract
insert into Resources (name, content, embed, ResourceCategoryId)
values ('Monteray Bay Aquarium Livestream', 'https://www.montereybayaquarium.org/animals-and-experiences/live-web-cams', null, 2),
	   ('Hedgehogs Go Tubing', 'http://www.animalplanet.com/tv-shows/too-cute/videos/hedgehogs-go-tubing/','http://www.animalplanet.com/embed?page=1113"', 2);
	  
# insert resource for category inspire
insert into Resources (name, content, embed, ResourceCategoryId)
values ('How Nature Changes the Brain', 'https://well.blogs.nytimes.com/2015/07/22/how-nature-changes-the-brain/?_r=0', null, 3),
	   ('The Case For Emotional Hygiene', 'https://www.ted.com/talks/guy_winch_the_case_for_emotional_hygiene', 'https://embed.ted.com/talks/guy_winch_the_case_for_emotional_hygiene', 3);
	  
# insert resource for category cope
insert into Resources (name, content, embed, ResourceCategoryId)
values ('Self-care, Coping, and Healing', 'https://www.takebackthetech.net/be-safe/self-care-coping-and-healing', null, 4),
	   ('Radical Self Care', 'http://www.elephantjournal.com/2014/09/radical-self-care-101/', null, 4);

# insert data into transactions for testing, etc
insert into Transactions (FeelingId, ResourceId)
values (23, 3),
       (31, 4),
       (10, 2),
       (65, 2),
       (82, 8),
       (24, 3),
       (62, 5),
       (68, 6),
       (79, 1),
       (54, 4),
       (54, 7),
       (36, 2),
       (31, 7),
       (24, 1),
       (40, 6),
       (59, 3),
       (22, 6),
       (36, 8),
       (57, 3),
       (23, 5),
       (81, 1),
       (77, 4),
       (22, 2),
       (65, 6),
       (5, 8),
       (65, 3),
       (38, 5),
       (51, 5),
       (75, 7),
       (14, 5),
       (2, 8),
       (70, 7),
       (49, 1),
       (67, 4),
       (8, 2),
       (11, 7),
       (80, 3),
       (10, 3),
       (80, 3),
       (14, 5),
       (25, 8),
       (42, 4),
       (4, 7),
       (42, 6),
       (69, 4),
       (60, 8),
       (33, 4),
       (51, 7),
       (29, 8),
       (23, 8),
       (54, 5),
       (62, 8),
       (41, 3),
       (17, 6),
       (32, 5),
       (11, 1),
       (21, 8),
       (71, 7),
       (64, 4),
       (82, 5),
       (69, 7),
       (69, 1),
       (24, 5),
       (76, 8),
       (69, 2),
       (30, 7),
       (50, 8),
       (42, 3),
       (11, 5),
       (65, 4),
       (7, 6),
       (36, 1),
       (36, 6),
       (31, 2),
       (40, 4),
       (16, 2),
       (49, 1),
       (7, 4),
       (18, 8),
       (17, 7),
       (57, 3),
       (5, 7),
       (18, 8),
       (55, 5),
       (63, 4),
       (70, 2),
       (54, 2),
       (3, 5),
       (79, 4),
       (33, 4),
       (6, 2),
       (80, 3),
       (22, 8),
       (45, 4),
       (38, 5),
       (78, 8),
       (53, 4),
       (32, 6),
       (6, 4),
       (31, 2);
