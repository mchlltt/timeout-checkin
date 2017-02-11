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

# insert data into transactions for testing, etc
insert into Transactions (FeelingId, ResourceCategoryId)
values (80, 1),
       (18, 4),
       (16, 2),
       (52, 4),
       (54, 4),
       (77, 2),
       (2, 1),
       (60, 2),
       (68, 2),
       (17, 3),
       (67, 3),
       (40, 1),
       (18, 3),
       (38, 1),
       (80, 4),
       (77, 1),
       (24, 3),
       (2, 3),
       (1, 2),
       (62, 3),
       (73, 1),
       (54, 2),
       (77, 1),
       (40, 3),
       (25, 2),
       (50, 3),
       (55, 1),
       (34, 2),
       (20, 4),
       (43, 4),
       (60, 2),
       (7, 4),
       (61, 3),
       (47, 4),
       (41, 1),
       (50, 3),
       (22, 4),
       (45, 1),
       (76, 1),
       (75, 4),
       (54, 2),
       (72, 2),
       (31, 3),
       (56, 1),
       (30, 4),
       (11, 1),
       (9, 4),
       (54, 3),
       (76, 3),
       (64, 1),
       (6, 3),
       (21, 3),
       (21, 2),
       (8, 1),
       (76, 3),
       (67, 4),
       (21, 1),
       (27, 1),
       (44, 4),
       (9, 3),
       (73, 3),
       (37, 2),
       (82, 2),
       (73, 2),
       (38, 1),
       (1, 1),
       (9, 4),
       (63, 3),
       (8, 1),
       (78, 4),
       (42, 3),
       (43, 4),
       (38, 1),
       (82, 2),
       (16, 2),
       (62, 3),
       (58, 2),
       (24, 1),
       (71, 3),
       (38, 4),
       (36, 3),
       (38, 3),
       (40, 2),
       (31, 2),
       (18, 3),
       (27, 2),
       (40, 2),
       (77, 4),
       (55, 4),
       (36, 2),
       (38, 1),
       (63, 2),
       (69, 2),
       (54, 4),
       (7, 1),
       (54, 3),
       (32, 4),
       (6, 1),
       (34, 3),
       (59, 4);
