import React from 'react'

const OpenSSH = () => {
    
    return(
    
    <article id="post__content">
        
        <h1 id="post__title" data-identifier="20150306">OpenSSH 安全配置备忘</h1>
        <p>下面是基于 Ubuntu Server 14.04 的 OpenSSH 配置说明，其他发行版的应该是类似的</p>

        <p>默认 ubuntu 是没有安装 openssh-server 的，首先安装 <code class="highlighter-rouge">sudo apt-get install openssh-server</code></p>

        <p>安装好以后就自动启动了，此时默认运行的端口在 22，简单的话通过 <code class="highlighter-rouge">ssh user@host</code> 的方法就能远程访问了，当然为了保证安全性，建议做两件事，一是将默认端口改掉，二是只允许通过密钥连接，禁止输入用户名密码直接登录</p>

        <p>在服务器修改上面2点的配置以前，我们可以先在客户端执行 <code class="highlighter-rouge">ssh-keygen</code>，根据具体的提示生成 RSA 的密钥对，最简单的就是一路回车</p>

        <p>将生成的公钥 <code class="highlighter-rouge">id_rsa.pub</code> 放到服务器需要登录的用户验证文件中，一般为 <code class="highlighter-rouge">/home/user/.ssh/authorized_keys</code>，可以将内容 <code class="highlighter-rouge">cat id_rsa.pub &gt;&gt; authorized_keys</code>，或者直接在客户端中执行 <code class="highlighter-rouge">ssh-copy-id -i id_rsa.pub user@host</code>，在默认的配置下客户端自动在服务器上生成相应的文件，记得客户端保留好私钥</p>

        <p><strong>这里需要注意的是，不管是 <code class="highlighter-rouge">authorized_keys</code> 还是 <code class="highlighter-rouge">id_rsa</code> 文件，对应的权限应该是 <code class="highlighter-rouge">600</code> 或者 <code class="highlighter-rouge">400</code> ，即除了 owner 以外其它用户都没有权限读写，否则设置无效</strong></p>

        <p>完成上面这步以后，可以修改服务器上的 <code class="highlighter-rouge">/etc/ssh/sshd_config</code> 文件了，重要的部分设置如下</p>

        <div class="highlighter-rouge"><pre class="highlight"><code>Port 1022 #端口设置变更 **重要**

        PermitRootLogin no #禁止用root进行登录
        RSAAuthentication yes
        PubkeyAuthentication yes

        ChallengeResponseAuthentication no
        PasswordAuthentication no #不允许通过密码登录 **重要**
        UsePAM no
        </code></pre>
        </div>

        <p>重启服务 <code class="highlighter-rouge">sudo service ssh restart</code></p>

        <p>Done！至此就可以在客户端直接通过私钥进行访问了</p>

    </article> 
    
    )}

export default OpenSSH;


