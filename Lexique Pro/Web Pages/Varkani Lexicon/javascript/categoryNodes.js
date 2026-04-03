// You can find instructions for this file here:
// http://www.treeview.net

// Decide if the names are links or just the icons
USETEXTLINKS = 1  //replace 0 with 1 for hyperlinks

// Don't use icons
USEICONS = 0

// Decide if the tree is to start all open or just showing the root folders
STARTALLOPEN = 0 //replace 0 with 1 to show the whole tree

ICONPATH = '../images/' //change if the gif's folder is a subfolder, for example: 'images/'

foldersTree = gFld("<i>Categories</i>", "")
  aux1 = insFld(foldersTree, gFld("Person", "c01.htm"))
    aux2 = insFld(aux1, gFld("Body", "c02.htm"))
  aux1 = insFld(foldersTree, gFld("Grammar", "c03.htm"))
    aux2 = insFld(aux1, gFld("Part of speech", "c04.htm"))
      aux3 = insFld(aux2, gFld("Adverbs", "c05.htm"))
      aux3 = insFld(aux2, gFld("Pronouns", "c06.htm"))
  aux1 = insFld(foldersTree, gFld("numbers", "c07.htm"))
  aux1 = insFld(foldersTree, gFld("animals", "c08.htm"))
  aux1 = insFld(foldersTree, gFld("kinship terms", "c09.htm"))
  aux1 = insFld(foldersTree, gFld("adverbs of time", "c10.htm"))
  aux1 = insFld(foldersTree, gFld("colours", "c11.htm"))
  aux1 = insFld(foldersTree, gFld("verb conjugation", "c12.htm"))
