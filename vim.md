

1.  ### Search and replace the word under the cursor

+ Put the cursor on foo.
+ Press <b>*</b> to search for the next occurrence.
+ Type **ciw** (change inner word) then bar then press Escape.
+ Press **n** (move to next occurrence) then **.** (repeat change).
+ Repeat last step.

```bash
* -> ciw -> n -> .
find->replace->next occurance -> repeat action
```