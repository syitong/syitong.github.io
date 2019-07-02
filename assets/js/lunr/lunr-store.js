var store = [{
        "title": "How to Update crouton in China",
        "excerpt":"After the latest update of Chrome OS, the audio output had some problem of the ubuntu precise installed on my C720 via crouton. After searching online for advice, I think the problem is related with driver of the audio device on my C720 and the best solution is to update...","categories": ["articles"],
        "tags": ["chromebook","crouton","GFW"],
        "url": "https://syitong.github.io/articles/How-to-Update-crouton-in-China/",
        "teaser":null},{
        "title": "On Inverse Dependence On Training Data Size",
        "excerpt":"This is a note on the paper SVM optimization: inverse dependence on training data size ((Shalev-Shwartz &amp; Srebro, 2008)). Summary of Key Ideas With fixed generalization accuracy, gaining more data should not increase the running time, because one can always ignore the extra data during training. Bottou and Lin provided...","categories": ["notes"],
        "tags": ["svm"],
        "url": "https://syitong.github.io/notes/on-shalev-shwartz2008/",
        "teaser":null},{
        "title": "On No Free Lunch Theorem",
        "excerpt":"This note discusses the implications of the celebrated No-Free-Lunch Theorem on kernel SVM, RF-SVM and neural network. Consistency and Learning Rate Definition((Steinwart &amp; Christmann, 2008)). Let be a loss function on the space , and is a distribution on . Assume that is a measurable learning method. Then is said...","categories": ["notes"],
        "tags": ["statistical learning"],
        "url": "https://syitong.github.io/notes/on-no-free-lunch/",
        "teaser":null},{
        "title": "Weird Function Learned by A Simple Rule",
        "excerpt":"(Proof of Problem 6.3 of (Devroye, Györfi, &amp; Lugosi, 1997) On Page 92 of (Devroye, Györfi, &amp; Lugosi, 1997), the authors give an example of hard to learn function as follows. On the interval , let the distribution spit out rational numbers and irrational numbers with equal probability. List all...","categories": ["notes"],
        "tags": ["statistical learning"],
        "url": "https://syitong.github.io/notes/weird-function-simple-rule/",
        "teaser":null},{
        "title": "On Hoeffding's Inequality",
        "excerpt":"Hoeffding inequality was first proved in 1963 for independent bounded random variables. It captures the effect of cancellation among independent random variables, which results in the concentration of their linear combination. It is further extended to the sub-Gaussian random variables, which shows that the linear combination of sub-Gaussian random variables...","categories": ["notes"],
        "tags": ["concentration inequality"],
        "url": "https://syitong.github.io/notes/on-hoeffding-inequality/",
        "teaser":null},{
        "title": "Upper and Lower Bounds of Sample Complexity of Supervised Learning",
        "excerpt":"By the note on No-Free-Lunch, we concluded that there is no learning algorithms solving all problems with a fixed learning rate. It is because of the difficulty on controlling the approximation error. However, the property of the estimation error has been known since 1990s. These results can be found in...","categories": ["notes"],
        "tags": ["optimization","statistical learning"],
        "url": "https://syitong.github.io/notes/sample-complexity/",
        "teaser":null},{
        "title": "Chromebook如何让我变一个Linux粉",
        "excerpt":"昨天花了两个多小时帮室友把他闲置了大半年的Chromebook装上了Linux系统。期间聊起我是什么时候开始接触和使用Linux系统的：      ”大概是2013年刚开学的时候吧？我记得那时候你也要换电脑来着。“     ”噢，我那台Thinkpad就是那时候买的。“     ”是的，我记得那时候我也在你的推荐下买了X240，高配的，花了一千多刀，后来觉得太贵了，又给退了，看Chromebook挺便宜，想着反正平时在学校windows，mac的台机都有，就想买台Chromebook将就一下。“     ”啊，所以就是那时候咱俩的差距就从那时候开始了啊！“     ”……“    于是我的宏碁C720从那时候起开始被我无穷无尽的折腾，不过直到今天它仍然工作正常。当时其实还是抱着ChromeOS可以被Google像Android那样严肃对待，发展成功能全面的操作系统的，然而这一想法直到2017年的今天似乎仍然没有完全实现。根据网上的 测评 ，最新的三星Chromebook Pro尚无法支持全部Android应用，而且部分应用兼容性还有问题。   事实证明当时大家对ChromeOS这个操作系统的不屑是绝对有道理的——它在生产力方面实在是太弱了。以我的日常核心需求为例，最大的要求就是可以使用Latex编辑和生成数学文稿，特别是当时还非常依赖所见即所得的编辑器 LyX ，这在ChromeOS上完全不可能。当时就在网上搜了一下如何提高Chromebook生产力的问题，于是就看到了crouton 项目，一个在Chromebook上安装Linux的开源项目。   事实上如果不是C720的199美元的价格足够低廉，当时的我很可能不敢拿它冒险尝试一个几乎从没接触过的操作系统的。我曾经在Windows电脑上安装过Ubuntu双系统，但是从来没有长久使用过，命令行更是一句也看不懂。每一个试图从Windows转投Linux的人应该都明白这种感受，没有刚需的情况下，你很难有动力坚持使用Linux操作系统，学习曲线非常缓，而且很多Windows上必装的应用像是QQ，飞信——已经消失了，MS Office都没有完美的解决方案。但是从ChromeOS转投Linux则没有这个问题，因为别无选择。      如今回想起来，感觉当时真是非常幸运。C720大概是目前为止针对Chromebook的开源项目支持最为广泛的机型。而crouton项目发展到2013年的时候也已经足够稳定和成熟。crouton并不需要完全删除ChromeOS，某种意义上更像是双系统，这也是我一开始选择了crouton方案的主要原因，感觉似乎更安全一些。于是一切都从一句sudo sh -e ~/Downloads/crouton -t xfce开始了。   一开始一切都很顺利，当然小bug也是不断，但是没到影响使用的程度。直到后来突然发现，16G的存储空间实在是太小了，装了Latex编译器，再存上一些文件就不够用了。于是第一次真正的大折腾开始了——将crouton搬到一个USB Drive上。具体的过程就不重复了，现在crouton的官方wiki上也有很完整的指导。买一个非常袖珍的U盘长期插在电脑上即使装入电脑包也没有关系。再后来回国期间又遇到了第二个大问题，因为GFW的缘故，crouton挂在google project下的一些包无法获得。后来简单研究了一下crouton的脚本，终于通过对wget设置代理，加上翻墙解决了这个问题，于是激动不已的写了第一篇博文， How to Update crouton in China 。再后来又遇上了dropbox的图标显示问题，长期稳定的翻墙办法等等。随着对Linux的使用一点一点的熟练起来，你很难不被Linux背后的理念所吸引：开源；基于文本的管理和设置系统；图形化虽然做的已经不输Windows，但命令行仍然能发挥不可替代的作用；每一个应用都专注于一个核心功能并把它做到最好；权限控制严格；如果你愿意花时间，它可以实现几乎任何你想实现的个性化设置。也是从在Chromebook上折腾Linux开始，我学习了python，爱上了Vim，熟悉了Git，这些为我后来的科研工作也提供了巨大的帮助。   直到今年年初，crouton在经历的长期的稳定工作后有一次遇上了严重的bug，严格来说，这不能算是crouton项目的责任。因为它是基于ChromeOS的，而ChromeOS的更新又极为频繁，常常会因为ChromeOS的更新给原本稳定的crouton带来新的问题。加之这台用了四年的C720也早已经可以完成使命说再见了，所以我下定决心将ChromeOS完全删掉，安装了为Chromebook订制的GalliumOS。然而效果却是让我颇为意外。到目前为止，我已经使用了近半年的GalliumOS，非常稳定流畅。于是我的Chromebook还在光荣的继续服役。在我的极力推荐下，我的室友也购入了一台Dell的Chromebook，这才有了文章开头的一幕。   某种意义上，Chromebook对我而言类似于带动计算机科学的教育的Raspberry Pie。它低廉的价格和入门级的配置加上鸡肋的系统，使得他更像是一个玩具，让我愿意拿它做各种尝试。当然如今在Google Pixel的带动下，高端配置的Chromebook也越来越常见，云端服务的增多以及网络的普及，使得完全依赖ChromeOS也成为可能。不久之后我大概也会考虑再买一台配置更好的Chromebook——毕竟相同的硬件配置下，Chromebook还是比Windows PC和Macbook便宜了快一半——然后继续我的Linux之旅。  ","categories": ["articles"],
        "tags": ["chromebook","linux"],
        "url": "https://syitong.github.io/articles/Chromebook%E5%A6%82%E4%BD%95%E8%AE%A9%E6%88%91%E5%8F%98%E6%88%90%E4%B8%80%E4%B8%AALinux%E7%B2%89/",
        "teaser":null},{
        "title": "Acer C720电池更换及GalliumOS安装与配置",
        "excerpt":"八月份完成论文的一个主要部分，决定犒赏一下自己。一直以来都想升级一下我的C720，毕竟是4年前的电脑了。特别是电池续航已经大不如从前，系统显示电池满电容量也只有标称容量的一半左右。没有了最初让我惊艳的全天不插电的续航表现，其他方面的弱点就让人更不能忍受了，比如屏幕的大小和分辨率，都距离今天的商务级的dell cp 13，hp cp 13差距较大了，更不用说asus c302和samsung cp pro了。   然而上网物色了一圈，在几台最新的chromebook中拿不定主意。当然最主要的因素还是价格都远高于C720当初的199刀。而且还有潜在的对GalliumOS不兼容的问题。其实最想入手的是Google自家的pixel 2015版，可是貌似这个机型已经成了收藏品一般的存在，不要说新机，就连二手的都很难找到。最近又有流言，说Google要在秋季再推出一款pixel chromebook，所以我也打算再让我的C720坚持一段时间。于是就有了换电池的念头。   之前因为帮老妈和同学拆过两次笔记本电脑，所以现在胆子愈发的大了。看YouTube上的视频，换电池也不是什么困难的工作。事实上也确实如此。电池是在Amazon上的一个买配件的第三方商铺购买的，看销量之前也没什么人买过。型号也略有不同，我的C720原装电池是AP13J3K，购得的是AP13J4K，但是之前在网上看到这两种型号的电池都有在C720上使用，有些店家也是声称通用，所以估计问题不大。拆机换电池的过程就不重复了，可以去看前面的视频链接。更换上的新电池实际容量和标称容量基本一致，所以估计应该能达到新机时的续航时间。   然而一个没有料到的问题是，在拆机更换电池之后，原本正常使用的GalliumOS无法启动了，大概是和stock bios的设置有关系。我不得不先把C720恢复到ChromeOS，然后再走一遍GalliumOS的安装过程。装好之后还要再把之前常用的应用程序都安装并设置好，这个过程比装系统还要麻烦的多。所以在此做一个记录，一方面可以帮助有意将Chromebook+Linux作为常用工作电脑的同学提供一个我的大概的应用清单，另一方面也可以为自己以后再走类似过程时省去一些上网查资料的功夫。           首先是添加中文支持。这个Linux自带的语言选项就可以搞定。然后安装上搜狗的Linux中文输入法。            usb存储以及Dropbox支持。由于C720本身存储空间只有16G，安装完GalliumOS系统后只剩下10G不到，所以在电脑上长期插一个便携的usb drive是很有必要的。Sandisk和Samsung都有这种大容量的袖珍usb盘。这里有两个问题。首先，Dropbox要在usb上正常工作，必须保证在开机或者从睡眠中恢复时usb drive要能够自动加载(mount)，否则Dropbox就会因为找不到同步的文件夹而断开账户，或者直接自动在home文件夹下创建新的同步文件夹。开机自动挂载可以在gnome-disk-utility中设置，具体的选项为       user,permissions,uid=1000,gid=1000,umask=022       挂载点为/home/Portable 。文件系统类型要按照usb drive的格式选定，我的是ntfs，当初选择该类型似乎是因为其他类型会有各自的问题。前四个选项是为了保证指定的user有权限在登录时挂载usb drive，最后一个则是为了保证挂载后能够Dropbox有足够的权限改动存储的文件。            在不安装LaTeX的情况下安装LyX。一方面是由于存储空间的限制，另一方面也是因为在本地管理LaTeX包实在是太麻烦，而ShareLaTeX的服务又很好用，所以我已经很久不在本地编译LaTeX文件了。但是LyX作为所见即所得的编辑器还是挺好用的。由于LyX需要本地安装LaTeX，所以就需要通过安装空的LaTeX包骗过LyX。具体参见Integrating vanilla TeX Live with Debian 。            Vim的配置。主要就是已有的配置文件，加上Vundle 管理的几个插件。            其他就是一些常用软件的安装，包括：                       typora ，一个简洁的所见即所得的markdown编辑器，这篇文章就是用它写的；                        Tagspace，一个文件标签管理应用；                        Jabref，bibtex文献管理应用；                        Jekyll，静态博客生成应用；                        GeoGebra，数学教学辅助工具；           ……                   以上就是这一整天折腾的记录。希望对其他喜欢折腾chromebook的人能有所帮助。  ","categories": ["articles"],
        "tags": ["chromebook","linux"],
        "url": "https://syitong.github.io/articles/Acer-C720%E7%94%B5%E6%B1%A0%E6%9B%B4%E6%8D%A2%E5%8F%8AGalliumOS%E5%AE%89%E8%A3%85%E4%B8%8E%E9%85%8D%E7%BD%AE/",
        "teaser":null},{
        "title": "On the Spectrum Decay Rate of Gaussian Kernel Operator",
        "excerpt":"In the study of random Fourier features method, (Bach, 2017) proposed a way of generating random features so that the feature space generated randomly approximates the original RKHS very accurate with only small number of features. This idea is an analogue of column sampling to approximate the matrix multiplication. is...","categories": ["notes"],
        "tags": ["functional analysis","kernel method"],
        "url": "https://syitong.github.io/notes/spectrum-Gaussian/",
        "teaser":null},{
        "title": "Capacity of Neural Networks (1): Rademacher Complexity",
        "excerpt":"Current sample complexity analysis of supervised learning heavily depends on the capacity analysis of the hypothesis classes. There are many different quantities characterizing the capacity. Among them the most widely used are VC-dimension and Rademacher/Gaussian complexity. In this series of notes, we will first prove some general properties of Rademacher/Gaussian...","categories": ["notes"],
        "tags": ["statistical learning","neural network"],
        "url": "https://syitong.github.io/notes/capacity-of-neural-network-1/",
        "teaser":null},{
        "title": "Capacity of Neural Networks (2): Contraction Inequality",
        "excerpt":"In this section, we discuss the contraction inequality of Rademacher complexity. It is very useful for peeling off the loss function from the hypothesis class in the sample complexity analysis. Contraction Inequality of The first inequality we consider here is that if is an -Lipschitz function. This inequality is attributed...","categories": ["notes"],
        "tags": ["statistical learning","neural network"],
        "url": "https://syitong.github.io/notes/capacity-of-neural-networks-2/",
        "teaser":null},{
        "title": "Capacity of Neural Networks (3): Main Results",
        "excerpt":"In this note, we will look at the Rademacher complexity of 2-layer neural networks, and compare it with the result of kernel method. This is the main result of (Bartlett &amp; Mendelson, 2003). We rephrase it as follows. Theorem. Suppose that has Lipschitz constant . Define the class computed by...","categories": ["notes"],
        "tags": ["statistical learning","neural network"],
        "url": "https://syitong.github.io/notes/capacity-of-neural-networks-3/",
        "teaser":null},{
        "title": "Capacity of Neural Networks (4): VC-Dimension and Rademacher Complexity",
        "excerpt":"In this note, we discuss the relation between VC-dimension and Rademacher/Gaussian complexities. First, let’s look at the definition of VC-dimension. Definition. (VC-dimension) For a hypothesis class from to , it is said that shatters the set if for any assigned to there exists in such that for all . The...","categories": ["notes"],
        "tags": ["statistical learning"],
        "url": "https://syitong.github.io/notes/capacity-of-neural-networks-4/",
        "teaser":null},{
        "title": "Proof of Stirling's Formula",
        "excerpt":"Stirling’s formula is very useful in all kinds of asymptotic analysis. Here we present one of many proofs. First, Stirling’s formula says that We start from the fact that . Then do the substitution . We get the representation We denote . Then we only need to show that the...","categories": ["notes"],
        "tags": ["asymptotic analysis"],
        "url": "https://syitong.github.io/notes/proof-of-stirling-formula/",
        "teaser":null},{
        "title": "Capacity of Neural Networks (5): Sauer's Lemma",
        "excerpt":"In this note we prove the Sauer’s lemma which plays the key role in establishing the connection between VC-dimension and Rademacher complexity. We use the proof in Section 8.3 of (Vershynin, 2017). There are two steps in the proof. First, we prove Pajor’s lemma that for any boolean function class...","categories": ["notes"],
        "tags": ["statistical learning"],
        "url": "https://syitong.github.io/notes/capacity-of-neural-network-5/",
        "teaser":null},{
        "title": "Log Loss and Multi-Class Hinge Loss (1)",
        "excerpt":"Hinge loss functions are mainly used in support vector machines for classification problem, while cross-entropy loss functions are ubiquitous in neural networks. In this note, we will study their basic properties and compare their usage. First, let’s have a look at the binary case. In the binary classification problem, we...","categories": ["notes"],
        "tags": ["statistical learning"],
        "url": "https://syitong.github.io/notes/log-loss-and-multi-class-hinge-loss-1/",
        "teaser":null},{
        "title": "Universal Approximation Property of RKHS and Random Features (1)",
        "excerpt":"On a subset of , a binary symmetric function is called positive definite if the matrix is positive semi-definite for any list of elements . It is clear that if , it is symmetric and positive definite. It is not surprise that function is used as some sort of inner...","categories": ["notes"],
        "tags": ["statistical learning"],
        "url": "https://syitong.github.io/notes/universality-of-RKHS-and-random-features-1/",
        "teaser":null},{
        "title": "Universal Approximation Property of RKHS and Random Features (2)",
        "excerpt":"Universal Approximation Property of RKHS In this note, we discuss the universal approximation property of RKHS and compare with the property of neural network. The material is mainly based on (Micchelli, Xu, &amp; Zhang, 2006) and (Cybenko, 1989). The universal approximation property says that the hypothesis class accessible by the...","categories": ["notes"],
        "tags": ["statistical learning"],
        "url": "https://syitong.github.io/notes/universality-of-RKHS-and-random-features-2/",
        "teaser":null},{
        "title": "Universal Approximation Property of RKHS and Random Features (3)",
        "excerpt":"We have seen the universal approximation property of RKHS generated by radial kernels and of one-hidden-layer neural networks with sigmoidal activation functions, in previous notes. However, they only confirm that the function class considered can approximate continuous functions defined on a compact space, and hence all functions, as well as...","categories": ["notes"],
        "tags": ["statistical learning"],
        "url": "https://syitong.github.io/notes/universality-of-RKHS-and-random-features-3/",
        "teaser":null},{
        "title": "Bessel Functions and Fourier Transform of Radial Functions",
        "excerpt":"Definition of Bessel Functions There are several ways to define Bessel functions. The one given by (Grafakos, 2008) Appendix B is as follows, Here is any complex number with real part greater than . The second definition is that is the solution of the ODE, The third one is the...","categories": ["notes"],
        "tags": ["Fourier Analysis"],
        "url": "https://syitong.github.io/notes/bessel/",
        "teaser":null},{
        "title": "Holder's and Young's Inequalities",
        "excerpt":"Classical Case A quick proof of general Holder’s inequality is as follows. First, by Jensen’s inequality, we have for positive and satisfying , Then for functions , -integrable, we can set to be and apply the inequality above. Integrate both sides, the general Holder’s inequality gets proved. Now we prove...","categories": ["notes"],
        "tags": ["real analysis"],
        "url": "https://syitong.github.io/notes/young/",
        "teaser":null},{
        "title": "利用Jekyll搭建博客",
        "excerpt":"搭建个人博客主要有三种途径。一种是利用现成的博客网站，如Google的Blogger服务，新浪博客等。另一种则是利用软件生成博客网页， 再上传到自己的服务上。这一类博客生成软件有不少，比如应用最广泛的WordPress，和功能稍弱，但更为简洁的Jekyll和Pelican。 Jekyll的安装与配置 Jekyll是通过Ruby实现的一个工具包。在已经安装Ruby的情况下，安装Jekyll十分简单。和官方教程中略有不同的地方是，为了保持一个干净的根系统，安装时最好使用 gem install --user-install jekyll bundler 这样Jekyll会被安装在用户home文件夹下的.gem目录。博客根目录中的Gemfile定义了你的博客中所需要的插件： gem \"jekyll\", \"~&gt;3.5\" # This is the default theme for new Jekyll sites. You may change this to anything you like. gem \"minimal-mistakes-jekyll\" gem \"jekyll-archives\" gem \"jekyll-scholar\" # If you want to use GitHub Pages, remove the \"gem \"jekyll\"\" above...","categories": ["articles"],
        "tags": ["internet","Jekyll"],
        "url": "https://syitong.github.io/articles/jekyll/",
        "teaser":null},{
        "title": "Euler's Limit Formula for the Gamma Function",
        "excerpt":"This note is based on the Appendix A.7 of (Grafakos, 2008). The gamma function is defined by the integral . For integer this defines the factorial up to . In general this definition holds for all complex numbers except for non-positive integers, where it has simple poles. This can be...","categories": ["notes"],
        "tags": ["asymptotic analysis"],
        "url": "https://syitong.github.io/notes/euler-gamma-fn/",
        "teaser":null},{
        "title": "Asymptotic Expansion of Bessel Functions For Large Argument",
        "excerpt":"This note is based on Appendix B.7 and B.8 of (Grafakos, 2008). First, we show that Bessel function can be written into the following form for and . This is done by considering the line integral of over the curves shown in the illustration (arrows should be flipped!) . First,...","categories": ["notes"],
        "tags": ["asymptotic analysis"],
        "url": "https://syitong.github.io/notes/asymtotic-bessel/",
        "teaser":null},{
        "title": "Product Form of Euler's Limit Formula for the Gamma Function",
        "excerpt":"This note is a continuation of last one. By the definition of , for , we can rewrite it in the following form, where and is the Euler’s constant. So by sending to infinity, we get Assume that . Then the infinite product And for any , Therefore the infinite...","categories": ["notes"],
        "tags": ["asymptotic analysis"],
        "url": "https://syitong.github.io/notes/prod-euler-gamma/",
        "teaser":null},{
        "title": "HiDPI Chromebook上Crouton的设置",
        "excerpt":"入手HP Chromebook 13 g1大半年，一开始就安装了Gallium OS。但Gallium OS迟迟无法解决intel skylake model上的音频输出问题，加上Gallium OS的电源管理比Chrome OS要弱不少，不接电源的情况下无法长时间的使用。忍了大半年后，终于回到了Crouton的方案。当初离开Crouton主要是遇上了休眠崩溃的bug，如今已经修复，所以可以放心使用。更主要的是，谷歌已经开始在自家的旗舰Pixelbook上支持Linux，更有Android的加持，让我对回到原生Chrome OS抱有更多的期待。 这里记录的主要是这次装机中遇到的一些问题和相应的解决方案。 1. Target的选择 这次安装时最初想尝试一下最轻量级的安装，也就是xiwi+cli的组合。也就意味着大部分操作要在命令行完成。但是对于已经用惯Atom编辑器的我来说，视窗界面肯定也是不可少的，这可以用xiwi实现。然而立刻就发现xiwi对HiDPI的支持很差，虽然crouton extension支持HiDPI，但是开启后字体变得非常小，完全无法使用。原因大概是xiwi的视窗管理是通过i3实现？即使安装了Atom HiDPI插件，菜单的字体仍然无法挽救。陆续尝试的synaptic软件管理器也有这个问题。而在安装了xfce target之后，将font dpi调至192，在xfce4桌面环境中(仍然由xiwi驱动)所有的菜单字体都恢复正常，使用xiwi打开thunar文件管理器菜单字体也正常，而xiwi单独打开synaptic和atom仍然不行。大概是因为软件对视窗管理的依赖有所不同？最后仍然决定使用从前的方式，依靠xfce4进行视窗管理。事实证明确实是因为使用xiwi作为图形界面时，xfce4的相关设置不会被自动使用。而在~/.xiwirc中写入一行 xfsettingsd&amp; 问题就得到了解决。xfsettingsd是xfce4的设置守护进程（daemon），图形界面会利用该进程读取设置参数，&amp;表示在后台运行。在没有它的情况下，图形窗口无法获取xfce4的设置，所以只能以i3图形管理器启动。在xfce4已经为高清显示器做好配置后，该进程可以使得xiwi窗口采用该配置。这是在这里偶然看到的。 2. Dropbox 另外一个促使我使用xfce4桌面的原因是Dropbox在安装时要弹出图形界面进行设置，虽然之后的运行其实并不依赖图形界面。 为了节省初次同步的时间，最好先暂停同步，然后将原有的Dropbox文件夹中的内容全部复制到新的Dropbox文件夹下。然后在开启同步。 Dropbox图标会出现在panel的通知栏，通知栏如果设置为automatically hide the panel: intelligently，同时试图右键通知栏图标会导致系统的崩溃。 更新：根据dropbox官方页面，dropbox也支持无视窗安装。具体步骤如下（未验证）： cd ~ &amp;&amp; wget -O - \"https://www.dropbox.com/download?plat=lnx.x86_64\" | tar xzf - ~/.dropbox-dist/dropboxd 并下载相关的python script进行控制。 3. 中文字体显示与locale设置 xfce target的安装没有包括语言支持？更没有没有中文字体，会导致中文字体无法显示。需要手动安装，我选择的是Noto字体。安装后还要检查locale设置是否为utf8编码, $...","categories": ["articles"],
        "tags": ["crouton","chromebook","linux"],
        "url": "https://syitong.github.io/articles/cb-setup/",
        "teaser":null},{
        "title": "如何阻止ssh重命名tmux窗口",
        "excerpt":"在使用tmux多窗口终端时，每次登录学校的服务器后，窗口的标签就会被改成与服务器的prompt相同。而且登出后也不会改回来，导致tmux经常几个窗口的名字都很长，也没有反映窗口当时的状况。之所以会这样，是因为tmux默认允许一些进程修改窗口名，而ssh对终端窗口的命名规则是由服务器上的配置文件决定的。   解决该问题的基本想法有三种：      在服务器端修改ssh对窗口的命名规则。但是这种办法显然无法应对多台服务器的情况。   在tmux的设置中完全禁用重命名。但是这样一来需要手动重命名的时候也无法实现。   重载ssh命令，加入需要的功能。   我采用的是第三种方案。顺便借此机会熟悉了一下bash的编程语法。以下代码是对chimay在superuser中提供的答案的改写。   ssh() {     local code=0     local ancien     if [ $TERM = screen -o $TERM = screen-256color ]; then         ancien=$(tmux display-message -p '#W')         command ssh \"$@\"         code=$?         tmux rename-window $ancien     else         command ssh \"$@\"         code=$?     fi     return $code }   其中变量code=$?用于返回ssh可能收到的状态返回值，比如需要报错的情况。ancien用于记录登录ssh之前窗口的名称。 command用于表示执行系统原本的ssh命令，避免调用定义本身导致无限循环！\"$@\"表示将所有参数作为整体传入ssh命令。和原作者提供的版本相比，我将tmux相关的命令都放在if then的包裹中，避免在非tmux环境下的错误。这样一来，每次在登出服务器之后，tmux都会把窗口改回登录前的名字。  ","categories": ["articles"],
        "tags": ["linux","bash programming"],
        "url": "https://syitong.github.io/articles/tmux-rename/",
        "teaser":null},{
        "title": "What Is Random Fourier Features Method?",
        "excerpt":"Random Fourier features method, or more general random features method is a method to help transform data which are not linearly separable to linearly separable, so that we can use a linear classifier to complete the classification task. For example, in the left illustration, the red dots and blue crosses...","categories": ["articles"],
        "tags": ["kernel method","statistical learning"],
        "url": "https://syitong.github.io/articles/rff-intro/",
        "teaser":null},{
        "title": "快速排序与快速选择算法",
        "excerpt":"之所以突然会对这个问题感兴趣是因为，大概一年前，在毫无准备的情况下去参加某互联网公司的面试，被问到了这样一个问题：“给定一个长度为n的数列，如何快速的找出其中第m大的元素。假设m远小于n。”因为对排序和选择算法完全不熟悉，只知道quicksort的时间复杂度应该是，以及从数列中找出最大值的复杂度是 。只好回答最简单暴力的算法，每次选出最大值然后剔除，这样m次后就找到了第m大的元素，相应的复杂度是。其实当时心里也清楚这显然离最优解有相当大的差距。毕竟这种算法不仅把第m大的元素找出来，还把前m大的都找了出来，而且排好了顺序，多做了很多无用功。况且找出最大值的复杂度只是，找出第m大的不应该比这一复杂度高太多。最近又要准备面试，刷算法题，所以就把排序和选择问题专门看了看。   首先，排序问题和选择问题相关但又不同。排序问题的复杂度要高于选择问题。但是选择问题在解决的过程中又不可避免的会一定程度的对数列进行部分排序——当然如果仅仅是为了选择，副产品部分排序越少越好。我们这里集中在快速排序quicksort，快速选择quickselect，以及mergesort，三种算法。从名字就可以看出，一三是排序算法，二是选择算法。其中quickselect又涉及一种pivotselect的算法：median of medians。   QuickSort   quicksort算法的核心想法就是“分而治之”(divide and conquer)。随机选择一个轴(pivot)，把大于轴的数移到轴的左侧，小于轴的值移到右侧，这样轴的位置就处于最终正确排序的位置。然后对轴两侧重复这一操作，直到排出全序。时间复杂度的分析也很简单，由于每一轮的比较操作都小于，所以只要知道迭代多少次停止即可。最好的情况，每次都恰好选到中位数做轴，这样最多轮就可以完成排序，总的时间复杂度就是。最差的情况，每次都选到最大或最小值做轴，这样相当于每轮迭代序列的长度只减少了1，所以就需要轮才能完成排序，复杂度就是。至于平均的情况，假设长度为的序列quicksort的平均时间代价是，而排序后轴值左边的序列长度为，那么     QuickSelect   下面我们在来看看快速选择算法。核心思想与quicksort一样，也是不断的将轴放到正确的位置。但因为只需要选择一个元素，所以每次只需要对包含目标元素的那一侧继续处理。对于简单版本的quickselect来说，这就足够了，其平均时间代价就是。因为轴是按照均匀分布选取，那么它落在四分位区间的概率就是，也就是说较长的那边最多也只有。而另外的概率，我们用作为上界。这样按照不断选取子序列的方式，到子序列长度为。假设长度为的情况下，quickselect的平均代价为，那么我们就有     当然，最差的情况时间代价会达到。   为了避免最差的情况出现，我们在选择轴的时候就需要慎重一些。相应的就有了median of medians的算法。其想法就是把当前序列划分成长度为5或者更大的奇数的片段，找出每个片段的中位数，再去找出这些中位数的中位数。在一个小片段上求中位数显然只需要依赖于片段长度的时间，在所有片段上都求中位数就是的复杂度。而去求中位数们的中位数时，使用迭代回quickselect的办法。迭代回去的序列长度就只有。而找出中位数的中位数作为轴，最差也能使序列长度减少。假设结合了median of medians的quickselect的平均代价为，那么，     显然，median of medians与quicksort结合也可以将它在最差情形下的时间代价提升至。   MergeSort   最后我们再来看看mergesort。它是一种最好，最差和平均复杂度都是的排序算法。其想法十分简单，就是把序列分解为长度为2的小片段，经过次比较，将他们完全排序。然后再将小片段两两合并，形成每个长度为4的片段最多需要3次比较，共次比较。然后继续两两结合，以此类推。显然总的时间复杂度就介于与之间。但是mergesort的优势在于易于并行实现。  ","categories": ["notes"],
        "tags": ["algorithms"],
        "url": "https://syitong.github.io/notes/sort-select/",
        "teaser":null}]
